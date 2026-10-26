/*
 * @Author: linxiaozhou.com
 * @LastEditors: linxiaozhou.com
 * @Description: 从请求里取调用方 IP
 */

/**
 * 取真实客户端 IP。
 *
 * 生产环境所有请求都经过网关（proxy 配置开了 xfwd），X-Forwarded-For 形如：
 *   客户端自己带的（可能伪造）, 网关看到的真实地址
 * 所以取**最后一段**；只有没有 XFF 时才退回 req.ip / socket。
 */
export function clientIp(req: any): string {
  const headers = (req && req.headers) || {};

  const forwarded = headers["x-forwarded-for"];
  if (forwarded) {
    const raw = Array.isArray(forwarded) ? forwarded.join(",") : String(forwarded);
    const list = raw
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    if (list.length) return normalizeIp(list[list.length - 1]);
  }

  const realIp = headers["x-real-ip"];
  if (realIp) return normalizeIp(Array.isArray(realIp) ? realIp[0] : realIp);

  const ip = (req && req.ip) || (req && req.socket && req.socket.remoteAddress) || "";
  return normalizeIp(ip);
}

/** IPv4-mapped IPv6（::ffff:1.2.3.4）统一显示成 IPv4 */
function normalizeIp(value: any): string {
  return String(value || "").replace(/^::ffff:/i, "");
}

export default clientIp;
