/*
 * @Author: linxiaozhou.com
 * @LastEditors: linxiaozhou.com
 * @Description: file content
 */
const GanttData = `
gantt
axisFormat %m-%d
dateFormat  YYYY-MM-DD
title 甘特图示例
excludes weekends

section 业务培训
业务了解 : done, des7, 2021-03-18, 2021-03-19
业务讨论 : done,des8, 2021-03-18, 2021-03-19

section 技术培训
代码规范 : des1, 2021-03-18, 2021-03-19
错误码规范 : des2, 2021-03-18, 2021-03-19
版本管理 : des3, 2021-03-18, 2021-03-19
代码提交流程 : des4,   after des1,  1d
单元测试规范 : des5,  after des1, 1d
集成测试规范: des6,  after des1, 1d
`;
