/*
 * @Date: 2021-03-27 22:58:40
 * @LastEditors: linxiaozhou.com
 * @Description: Converter
 */

/**
 * INPUT
 * const input = `
 * section 辅助工作--业务培训
 * 业务了解 : des7, 2021-03-14, 2021-03-15
 * 业务讨论 : des8, 2021-03-14, 2021-03-15

 * section 辅助工作--技术培训
 * 代码规范 : des1, 2021-03-14, 2021-03-15
 * 错误码规范 : des2, 2021-03-14, 2021-03-15
 * 版本管理 : des3, 2021-03-14, 2021-03-15
 * 代码提交流程 : des4,   after des1,  1d
 * 单元测试规范 : des5,  after des1, 1d
 * 集成测试规范: des6,  after des1, 1d
 * `;
 * 
 * ---------------------------------------------
 * 
 * OUTPUT:
 * const output = [
 *   // Section 1
 *   {
 *     section: "辅助工作--业务培训",
 *     tasks: {
 *       des7: { name: "业务了解", from: "2021-03-14", to: "2021-03-15", },
 *       des8: { name: "业务讨论", from: "2021-03-14", to: "2021-03-15", },
 *     },
 *   },
 * 
 *   // Section 2
 *   {
 *     section: "辅助工作--技术培训",
 *     tasks: {
 *       des1: { name: "代码规范", from: "2021-03-14", to: "2021-03-15", },
 *       des2: { name: "错误码规范", from: "2021-03-14", to: "2021-03-15", },
 *       des3: { name: "版本管理", from: "2021-03-14", to: "2021-03-15", },
 *       des4: { name: "代码提交流程", after: "des1", period: "1d" },
 *       des5: { name: "单元测试规范", after: "des1", period: "1d" },
 *       des6: { name: "集成测试规范", after: "des1", period: "1d" },
 *     },
 *   },
 * ];
 */
const rules = {
  gantt: /gantt/,
  section: /section /,
  task: /(\s)?:(\s)?/,
  after: /after /,
  flag: /flag /,
  period: /([0-9]+)(d|h)/,
};

const isAfter = (text) => {
  const cap = rules.after.exec(text);
  if (cap === null) {
    return null;
  }
  const temp = text.split(cap[0]);
  return {
    after: temp[1],
  };
};

const isFlag = (text) => {
  const cap = rules.flag.exec(text);
  if (cap === null) {
    return null;
  }
  const temp = text.split(cap[0]);
  return {
    flag: temp[1],
  };
};

const keyWords = {
  crit: "CRIT",
  done: "已完成",
  active: "活动",
};
const isKeyWord = (text) => {
  const index = Object.keys(keyWords).indexOf(text);
  if (index >= 0) {
    return Object.keys(keyWords)[index];
  }
  return null;
};

const isDate = (text) => {
  if (isNaN(new Date(text).getTime())) {
    return null;
  }
  return text;
};

const isPeriod = (text) => {
  const cap = rules.period.exec(text);
  if (cap === null) {
    return null;
  }
  return text;
};

const getSection = (src, rule) => {
  if (!rules[rule]) {
    return null;
  }
  const cap = rules[rule].exec(src);
  if (cap === null) {
    return null;
  }
  const temp = src.split(cap[0]);
  return {
    name: temp[0],
    content: temp[1],
  };
};

const parseTaskContent = (src) => {
  const temp = src.split(",");

  return temp.reduce((prev, curr) => {
    curr = curr.replace(/(\s+)?/, "").replace(/\s\S?\s+/, "");
    const keyword = isKeyWord(curr);
    if (keyword !== null) {
      Object.assign(prev, {
        [keyword]: true,
      });
      return prev;
    }

    const after = isAfter(curr);
    if (after !== null) {
      Object.assign(prev, after);
      return prev;
    }

    const flag = isFlag(curr);
    if (flag !== null) {
      Object.assign(prev, flag);
      return prev;
    }

    const date = isDate(curr);
    if (date !== null) {
      if (prev.from) {
        prev.to = date;
      } else {
        prev.from = date;
      }
      return prev;
    }

    const period = isPeriod(curr);
    if (period !== null) {
      Object.assign(prev, { period });
      return prev;
    }

    Object.assign(prev, {
      taskId: curr,
    });
    return prev;
  }, {});
};

const genGanttData = (gantt) => {
  const ganttConfig = {};
  let config = false;
  const arr = gantt.replace(/^ +$/gm, "").split("\n");
  const result = arr.reduce((temp, curr, index) => {
    // 解析gantt
    const cap = rules.gantt.exec(curr);
    if (cap !== null) {
      config = true;
    }
    if (getSection(arr[index + 1], "section") !== null) {
      config = false;
    }
    if (config === true) {
      const data = curr.split(" ");
      Object.assign(ganttConfig, {
        [data[0]]: data[1],
      });
      return temp;
    }

    // 解析section
    const section = getSection(curr, "section");
    if (section !== null) {
      temp.push({
        section: section.content,
        tasks: {},
      });
      return temp;
    }

    // 没有任何section，要创建默认的section
    if (temp.length === 0) {
      temp.push({
        section: "默认section",
        tasks: {},
      });
    }

    // 解析task
    const task = getSection(curr, "task");
    if (task === null) {
      return temp;
    }
    const { name, content } = task;
    const parsed = parseTaskContent(content);
    if (parsed === null) {
      return temp;
    }

    const taskId = parsed.taskId;
    delete parsed.taskId;
    Object.assign(temp[temp.length - 1].tasks, {
      [taskId]: {
        name,
        ...parsed,
      },
    });

    return temp;
  }, []);
  // console.log(JSON.stringify(result, null, 2));
  return {
    config: ganttConfig,
    data: result,
  };
};
