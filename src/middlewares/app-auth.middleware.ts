/*
 * @Author: linxiaozhou.com
 * @LastEditors: linxiaozhou.com
 * @Description: AppId / AppKey 鉴权（与 JWT 二选一）
 *
 * 用 AppKey 调账户服务 /open/me 换取账户身份，并把下游实际路由用 HMAC 签名带过去。
 */
import config from "../config";
import { createAccountsAppRequest } from "../helpers/request";
import { normalizeAudit, signAudit } from "../utils/audit-signature.util";
import { clientIp } from "../utils/request-ip.util";

const SERVICE = "resources";
const MAX_PATH = 300;

if (!config.APP_AUDIT_HMAC_SECRET) {
  console.warn("[audit] APP_AUDIT_HMAC_SECRET 未配置，AppKey 调用不会携带审计路由");
}

function auditPath(req: any): string {
  return String(req.originalUrl || req.url || "").split("?")[0].slice(0, MAX_PATH);
}

export default async function requireAppAuth(req: any, res: any, next: any) {
  const appId = String(req.headers["x-app-id"] || "").trim();
  const appKey = String(req.headers["x-app-key"] || "").trim();

  if (!appId || !appKey) {
    return res.status(401).json({ errors: { message: "缺少 X-App-Id 或 X-App-Key" } });
  }

  const audit = normalizeAudit({
    appId,
    service: SERVICE,
    method: req.method,
    path: auditPath(req),
    timestamp: String(Date.now()),
    ip: clientIp(req) || "unknown",
  });

  const headers: any = {
    "X-App-Id": appId,
    "X-App-Key": appKey,
  };

  if (config.APP_AUDIT_HMAC_SECRET) {
    headers["X-Audit-Service"] = audit.service;
    headers["X-Audit-Method"] = audit.method;
    headers["X-Audit-Path"] = audit.path;
    headers["X-Audit-Timestamp"] = audit.timestamp;
    headers["X-Audit-Ip"] = audit.ip;
    headers["X-Audit-Signature"] = signAudit(audit, config.APP_AUDIT_HMAC_SECRET);
  }

  try {
    const client = createAccountsAppRequest(headers);
    const result: { data: any; errors: any } = await client.get("/open/me");

    if (!result.data) {
      return res.status(result.errors?.status || 401).json({
        errors: { message: result.errors?.message || "AppKey 无效" },
      });
    }

    const { account, appId: verifiedAppId, scopes } = result.data;
    const scopeList = Array.isArray(scopes) ? scopes : [];

    req.user = {
      ...account,
      authType: "app",
      appId: verifiedAppId,
      scopes: scopeList,
    };
    req.auth = { type: "app", appId: verifiedAppId, scopes: scopeList };

    return next();
  } catch (err: any) {
    return res.status(err.status || 500).json({ errors: { message: err.message } });
  }
}
