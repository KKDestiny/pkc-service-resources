/*
 * /resources/protects/* 的鉴权入口。
 *
 * 原来这里是空实现（所有请求直接放过）；现在接到统一的 requireAuth：
 * Authorization(JWT) 或 X-App-Id/X-App-Key 二选一。
 * 这会让之前能直接下载的保护目录（logo.png、简历 pptx）变成需要凭证访问。
 */
import requireAuth from "./auth.middleware";

export default requireAuth;
