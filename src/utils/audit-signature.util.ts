/*
 * @Author: linxiaozhou.com
 * @LastEditors: linxiaozhou.com
 * @Description: 下游服务审计元数据的 HMAC 签名 / 校验
 *
 * 设计：下游服务（blog / manager / personal / resources / tasks）用
 * APP_AUDIT_HMAC_SECRET 对「appId + service + method + path + timestamp」签名，
 * account 服务用同一个 secret 校验。客户端不知道 secret，因此不能伪造审计路由。
 *
 * 注意：本文件与各下游服务里的副本必须保持同一份算法；改格式时两边一起改。
 */
import crypto from "crypto";

const VERSION = "v1";
const MAX_APP_ID = 64;
const MAX_SERVICE = 64;
const MAX_METHOD = 16;
const MAX_PATH = 300;
const MAX_TIMESTAMP = 20;
const MAX_IP = 45;

/** 审计时间戳允许的时钟偏差 */
export const AUDIT_MAX_AGE_MS = 5 * 60 * 1000;

export interface IAuditPayload {
  appId: string;
  service: string;
  method: string;
  path: string;
  timestamp: string;
  ip: string;
}

function clean(value: any, max: number): string {
  return String(value === undefined || value === null ? "" : value)
    .replace(/[\r\n]/g, " ")
    .trim()
    .slice(0, max);
}

/** 两边都用它做规范化，签名才不会因为大小写/空格/query 不一致而失败 */
export function normalizeAudit(input: any): IAuditPayload {
  return {
    appId: clean(input && input.appId, MAX_APP_ID),
    service: clean(input && input.service, MAX_SERVICE).toLowerCase(),
    method: clean(input && input.method, MAX_METHOD).toUpperCase(),
    path: clean(input && input.path, MAX_PATH).split("?")[0],
    timestamp: clean(input && input.timestamp, MAX_TIMESTAMP),
    ip: clean(input && input.ip, MAX_IP),
  };
}

export function auditCanonical(input: any): string {
  const p = normalizeAudit(input);
  return [VERSION, p.appId, p.service, p.method, p.path, p.timestamp, p.ip].join("\n");
}

export function signAudit(input: any, secret: string): string {
  return crypto.createHmac("sha256", String(secret || "")).update(auditCanonical(input)).digest("hex");
}

export function verifyAudit(input: any, secret: string, signature: string): boolean {
  if (!secret || !signature) return false;

  const expected = signAudit(input, secret);
  const actual = String(signature || "").trim().toLowerCase();
  const a = Buffer.from(expected, "hex");
  const b = Buffer.from(actual, "hex");

  // 长度不等时 timingSafeEqual 会抛错，先挡掉
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

/** 时间戳必须是毫秒数，且在允许的偏差内（防重放） */
export function isFreshAudit(timestamp: any, maxAgeMs = AUDIT_MAX_AGE_MS): boolean {
  const ts = Number(String(timestamp === undefined || timestamp === null ? "" : timestamp).trim());
  if (!Number.isFinite(ts)) return false;
  return Math.abs(Date.now() - ts) <= maxAgeMs;
}

export default {
  AUDIT_MAX_AGE_MS,
  normalizeAudit,
  auditCanonical,
  signAudit,
  verifyAudit,
  isFreshAudit,
};
