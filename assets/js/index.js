/* eslint-disable no-undef */

const globals = new GlobalToolsClass();
globals.setGlobal("dayjs", dayjs);
globals.setGlobal("bootstrap", bootstrap);
globals.setGlobal("marked", marked);
globals.setGlobal("axios", axios);

globals.setGlobal("APP_ROUTE", APP_ROUTE);
globals.setGlobal("APP_STATICS_PATH", APP_STATICS_PATH);
globals.setGlobal("APP_BOOKS_PATH", APP_BOOKS_PATH);
globals.setGlobal("APP_ARTS_PATH", APP_ARTS_PATH);

const HomeInst = new HomePageClass({ singleAPPMode: true });

// 初始化
$(document).ready(async function () {
  HomeInst.init();
  await HomeInst.show();
});
