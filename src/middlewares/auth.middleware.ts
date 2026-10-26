/*
 * @Author: linxiaozhou.com
 * @LastEditors: linxiaozhou.com
 * @Description: 登录态鉴权：Authorization(JWT) 或 X-App-Id/X-App-Key，满足其一即可
 *
 * 原来 resources 服务只有空实现的 protected.middleware；这个中间件把受保护资源
 * 真正接到账户服务上。保护目录仍是 /resources/protects/*。
 */
import APIError from "../utils/apierror.util";
import { createAccountsRequest } from "../helpers/request";
import requireAppAuth from "./app-auth.middleware";

const hasAppKey = (req: any) => !!(req.headers["x-app-id"] && req.headers["x-app-key"]);

export default async function (req: any, res: any, next: any) {
  if (!req.headers.authorization && hasAppKey(req)) {
    return requireAppAuth(req, res, next);
  }

  try {
    const reqClient = createAccountsRequest(req.headers.authorization);
    const result: { data: any; errors: any } = await reqClient.get("/mine/profile");

    if (result.data) {
      req.user = result.data;
      req.auth = { type: "jwt" };
      return next();
    }

    if (hasAppKey(req)) return requireAppAuth(req, res, next);

    throw new APIError("没有权限", 401);
  } catch (err: any) {
    if (hasAppKey(req)) return requireAppAuth(req, res, next);
    return res.status(err.status || 500).json({ errors: { message: err.message } });
  }
}
