/*
 * @Author: linxiaozhou.com
 * @LastEditors: linxiaozhou.com
 * @Description: file content
 */
import express from "express";
import config from "../config";

const router = express.Router({ mergeParams: true });

router.get("/", (req, res) => {
  res.render("./index", {
    APP_ROUTE: config.APP_ROUTE,
    APP_STATICS_PATH: config.APP_STATICS_PATH,
    APP_BOOKS_PATH: config.APP_BOOKS_PATH,
    APP_ARTS_PATH: config.APP_ARTS_PATH,
  });
});

export default router;
