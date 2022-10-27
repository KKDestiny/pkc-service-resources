/*
 * @Author: linxiaozhou.com
 * @LastEditors: linxiaozhou.com
 * @Description: file content
 */
const Flags = {
  common: "通用",
  backend: "后端",
  frontend: "前端",
  test: "测试",
  others: "其他",
};

const getStyle = (flag) => {
  switch (flag) {
    case Flags.common:
      return "ganttBlue";
    case Flags.frontend:
      return "ganttGreen";
    case Flags.backend:
      return "ganttRed";
    case Flags.test:
      return "ganttOrange";
    case Flags.others:
      return "ganttPink";
  }
  return "";
};

const genSources = (raw) => {
  // console.log(JSON.stringify(raw, null, 2));
  const converted = [];

  const list = {};
  for (let section of raw) {
    const tasks = section.tasks;
    Object.assign(list, { ...tasks });
  }

  for (let section of raw) {
    const tasks = section.tasks;
    Object.entries(tasks).reduce((temp, [taskId, task], index) => {
      let refTask = null;
      if (task.after) {
        refTask = list[task.after];
        const refDate = new Date(refTask.to);

        // 计算开始
        refDate.setDate(refDate.getDate());
        task.from = refDate.valueOf();

        // 计算结束
        const period = task.period || "";
        if (period.indexOf("d") > -1) {
          refDate.setDate(
            refDate.getDate() + Number(period.replace("d", "") || 0)
          );
        }
        if (period.indexOf("h") > -1) {
          refDate.setHours(
            refDate.getHours() + Number(period.replace("d", "") || 0)
          );
        }
        task.to = refDate.valueOf();
      }
      temp.push({
        name: index === 0 ? section.section : "",
        desc: task.name,
        values: [
          {
            from: `/Date(${new Date(task.from).getTime()})/`,
            to: `/Date(${new Date(task.to).getTime()})/`,
            label: task.name,
            customClass: getStyle(task.flag),
            dataObj: {
              label: task.name,
              from: new Date(task.from),
              to: new Date(task.to),
              after: refTask,
            },
          },
        ],
      });
      // console.log(taskId, task);
      return temp;
    }, converted);
  }
  // console.log(JSON.stringify(converted, null, 2));

  return converted;
};
