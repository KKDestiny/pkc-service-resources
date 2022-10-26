/*
 * @Date: 2020-07-18 00:49:04
 * @LastEditors: linxiaozhou.com
 * @Description: Description
 */
// eslint-disable-next-line no-undef
const __$ = $;
// eslint-disable-next-line no-undef
const __bootstrap = bootstrap;

function generateSeed(length = 20) {
  const text = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "1234567890"];
  const rand = function (min, max) {
    return Math.floor(Math.max(min, Math.random() * (max + 1)));
  };
  let pw = "";
  for (let i = 0; i < length; ++i) {
    const strpos = rand(0, 2);
    pw += text[strpos].charAt(rand(0, text[strpos].length));
  }
  return pw;
}
const initToastContainer = () => {
  __$("body").append(`
    <div class="toast-container scrollbar bottom-0 start-50 translate-middle-x position-absolute" style="z-index:10000; "> 
    </div>
  `);
};
initToastContainer();
const insertAToast = (options = {}) => {
  const { title, msg, style, autohide = true, delay = 5000, color = "text-white", background = "primary" } = options;

  const _getColor = background => {
    switch (background) {
      case "primary":
        return "#0d6efd";
      case "danger":
        return "#ef1127";
      case "warning":
        return "#ffca2b";
      case "success":
        return "#198754";
      case "dark":
        return "#212529";
      case "secondary":
        return "#6c757d";
    }
  };

  __$(".toast.hide").remove();
  const msgId = generateSeed();
  let toastHTML = "";
  const shadow = background === "dark" ? " box-shadow: 1px 1px 9px 4px rgba(255,255,255,0.3); " : "";
  if (style === "simple") {
    toastHTML = `
    <div id="${msgId}" style="z-index:10000; opacity:0.85; background:${_getColor(
      background
    )}!important; ${shadow}" class="toast ${color} bg-${background} bg-gradient border-0" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body">
          ${title}
        </div>
        <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
    `;
  } else {
    const _getColor = background => {
      switch (background) {
        case "primary":
          return "#0d6efd";
        case "danger":
          return "#dc3545";
        case "warning":
          return "#ffc107";
        case "success":
          return "#198754";
        case "dark":
          return "#212529";
        case "secondary":
          return "#6c757d";
      }
    };
    toastHTML = `
      <div id="${msgId}" class="toast" style="z-index:10000" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
        <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
          <rect width="100%" height="100%" fill="${_getColor(background)}"></rect>
        </svg>
          <strong class="me-auto">${title}</strong>
          <small class="text-muted">just now</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          ${msg}
        </div>
      </div>
    `;
  }
  __$(".toast-container").prepend(toastHTML);
  const toastElem = document.getElementById(msgId);
  // eslint-disable-next-line no-new
  new __bootstrap.Toast(toastElem, { autohide, delay });
  const myToast = __bootstrap.Toast.getInstance(toastElem); // Returns a Bootstrap toast instance
  myToast.show();
  return myToast;
};

class GlobalClass {
  constructor(configs = {}) {
    // 用户配置 ////////////////////////////////
    // 注意！用户配置会被下面的核心库等配置覆盖
    Object.entries(configs).reduce((temp, [field, config]) => {
      this[field] = config;
      return temp;
    }, 0);

    this._btns = [];

    // 第三方库 ////////////////////////////////
    /**
     * jQuery
     */
    this.$ = __$;
  }

  disableBtn(name, text = "数据获取中...") {
    this._btns[name] = this.$(`[name="${name}"]`).html();
    this.$(`[name="${name}"]`).addClass("disabled");
    this.$(`[name="${name}"]`).html(text);
  }

  enableBtn(name, text) {
    this.$(`[name="${name}"]`).removeClass("disabled");
    this.$(`[name="${name}"]`).html(text);
  }

  recoverBtn(name, text) {
    this.$(`[name="${name}"]`).removeClass("disabled");
    this.$(`[name="${name}"]`).html(text || this._btns[name]);
  }

  disableBtnById(id, text = "数据获取中...") {
    this._btns[id] = this.$(`#${id}`).html();
    this.$(`#${id}`).addClass("disabled");
    this.$(`#${id}`).html(text);
  }

  recoverBtnById(id, text) {
    this.$(`#${id}`).removeClass("disabled");
    this.$(`#${id}`).html(text || this._btns[id]);
  }

  /**
   * 动态配置
   * @param {*} feild 配置字段名
   * @param {*} config 配置信息
   */
  setGlobal(feild, config) {
    if (feild === "component") throw new Error("component is reserved");
    this[feild] = config;
  }

  /**
   * 设置组件
   * @param {*} feild
   * @param {*} func
   * @param {*} override 强制覆盖
   */
  setComponent(feild, func, override = false) {
    if (!override) {
      if (this.component[feild]) throw new Error(`component ${feild} is existed`);
    }
    this.component[feild] = func;
  }

  getComponent(feild) {
    return this.component[feild];
  }
}

class GlobalToolsClass extends GlobalClass {
  constructor(configs = {}) {
    super(configs);
  }

  // Toast 消息
  insertAToast(options = {}) {
    return insertAToast(options);
  }

  fullToast(title, msg, options = {}) {
    const { background = "primary", autohide } = options;
    return this.insertAToast({
      title,
      msg,
      style: "full",
      background,
      autohide: autohide === undefined ? false : autohide,
    });
  }

  simplePrimary(title) {
    return this.insertAToast({
      title,
      style: "simple",
      color: "text-white",
      background: "primary",
    });
  }

  simpleDark(title) {
    return this.insertAToast({
      title,
      style: "simple",
      color: "text-white",
      background: "dark",
    });
  }

  simpleSuccess(title) {
    return this.insertAToast({
      title,
      style: "simple",
      color: "text-white",
      background: "success",
    });
  }

  simpleWarning(title, autohide) {
    return this.insertAToast({
      title,
      style: "simple",
      color: "text-white",
      background: "warning",
    });
  }

  simpleDanger(title, autohide) {
    return this.insertAToast({
      title,
      style: "simple",
      color: "text-white",
      background: "danger",
      autohide: autohide === undefined ? false : autohide,
    });
  }

  simpleInfo(title, autohide = true) {
    return this.insertAToast({
      title,
      style: "simple",
      color: "text-black",
      background: "",
      delay: 2000,
      autohide,
    });
  }

  formatPath(str) {
    if (str && typeof str === "string") {
      str = str.replace(/\\/g, "/");
    }
    return str;
  }

  formatId(name) {
    return name
      .replace(/:/g, "_")
      .replace(/\?/g, "_")
      .replace(/=/g, "_")
      .replace(/ /g, "_")
      .replace(/-/g, "_")
      .replace(/\|/g, "_")
      .replace(/\//g, "_")
      .replace(/\\/g, "_")
      .replace(/\(/g, "_")
      .replace(/\)/g, "_")
      .replace(/\[/g, "_")
      .replace(/\]/g, "_")
      .replace(/\./g, "_");
  }

  // 计算年差
  getYears(startDate) {
    return this.dayjs().year() - this.dayjs(startDate).year();
  }

  // 日期和时间
  getTimestemp(date) {
    return this.dayjs(date).format("YYYYMMDDHHmmss");
  }

  getTimestemp1(date) {
    return this.dayjs(date).format("YYYY_MM_DD_HH_mm_ss");
  }

  showDatetime(date) {
    return this.dayjs(date).format(this.DATETIME_FORMAT);
  }

  showDate(date) {
    return this.dayjs(date).format(this.DATE_FORMAT);
  }

  showDateMonth(date) {
    return this.dayjs(date).format(`YYYY-MM`);
  }

  showDate1(date) {
    return this.dayjs(date).format("YYYY/MM/DD");
  }

  showTime(date) {
    return this.dayjs(date).format(this.TIME_FORMAT);
  }

  showTimeMin(date) {
    return this.dayjs(date).format(this.TIME_MINUTE_FORMAT);
  }

  showDateCN(date) {
    return this.dayjs(date).format(`YYYY年MM月DD日`);
  }

  showWeekday(date) {
    const weekdays = ["日", "一", "二", "三", "四", "五", "六"];
    return `星期${weekdays[this.dayjs(date).day()]}`;
  }

  showWeekday1(date) {
    const weekdays = ["日", "一", "二", "三", "四", "五", "六"];
    return `周${weekdays[this.dayjs(date).day()]}`;
  }

  showDateDesc(date, showWeekday = false, refDate) {
    if (!refDate) refDate = new Date();
    const weekdays = ["日", "一", "二", "三", "四", "五", "六"];
    const weekday = showWeekday ? `(星期${weekdays[this.dayjs(date).day()]})` : "";
    if (this.isToday(date)) {
      return `今天${weekday}`;
    } else {
      const days = this.dayjs(date).diff(this.showDate(refDate), "day");
      if (days > 0) {
        return `${days}天后${weekday}`;
      } else if (days === 0) {
        return `昨天${weekday}`;
      } else {
        return `${0 - days}天前${weekday}`;
      }
    }
  }

  showDatetimeShort(datetime) {
    let date = "";
    if (this.dayjs().isSame(datetime, "d")) {
      date = "今天";
    } else if (this.dayjs().add(-1, "d").isSame(datetime, "d")) {
      date = "昨天";
    } else if (this.dayjs().add(-2, "d").isSame(datetime, "d")) {
      date = "前天";
    } else if (this.dayjs().add(1, "d").isSame(datetime, "d")) {
      date = "明天";
    } else if (this.dayjs().add(2, "d").isSame(datetime, "d")) {
      date = "后天";
    } else {
      date = `${this.dayjs(datetime).format("YYYY-MM-DD")} `;
    }
    const time = this.dayjs(datetime).format("HH:mm");
    return `${date}${time}`;
  }

  /**
   * 将秒数转为 HH:mm:ss
   */
  convertSecond(s) {
    var t = "";
    if (s > -1) {
      var hour = Math.floor(s / 3600);
      var min = Math.floor(s / 60) % 60;
      var sec = s % 60;
      if (hour < 10) {
        t = "0" + hour + ":";
      } else {
        t = hour + ":";
      }
      if (min < 10) {
        t += "0";
      }
      t += min + ":";
      if (sec < 10) {
        t += "0";
      }
      t += sec.toFixed(0);
    }
    return t;
  }

  getYesterday(refDate) {
    return this.dayjs(refDate).add(-1, "day");
  }

  /**
   * 判断date是否在refDate之后
   * @param {*} date
   * @param {*} refDate 基准日期
   * @returns
   */
  dateIsAfterRefDate(date, refDate = new Date()) {
    if (this.dayjs(date).diff(refDate, "day") > 0) {
      return true;
    }
    return false;
  }

  /**
   * 判断date是否在refDate之后
   * @param {*} date
   * @param {*} refDateTime 基准日期
   * @returns
   */
  datetimeIsAfterRefDatetime(datetime, refDateTime) {
    if (this.dayjs(datetime).diff(refDateTime, "second") >= 0) {
      return true;
    }
    return false;
  }

  /**
   * 获取某个日期所在周的第一天和最后一天
   * @param {*} date
   */
  getWeekBeginAndEnd(date = new Date()) {
    const day = this.dayjs(date).day();
    const val = day === 0 ? 7 : day;
    const begin = this.dayjs(date).add(0 - val + 1, "days");
    const end = this.dayjs(date).add(7 - val, "days");
    return {
      begin: this.showDate(begin),
      end: this.showDate(end),
    };
  }

  /**
   * 获取某个日期所在月的第一天和最后一天
   * @param {*} date
   */
  getMonthBeginAndEnd(date = new Date()) {
    return {
      begin: this.dayjs(date).startOf("month").format(this.DATE_FORMAT),
      end: this.dayjs(date).endOf("month").format(this.DATE_FORMAT),
    };
  }

  /**
   * 判断一个日期是否在当前时间所在周
   * @param {*} date
   * @returns
   */
  dateIsThisWeek(_date, refDate) {
    const date = this.showDate(_date);
    const { begin, end } = this.getWeekBeginAndEnd(refDate);
    if (this.dayjs(date).diff(begin, "day") >= 0 && this.dayjs(end).diff(date, "day") >= 0) {
      return true;
    }
    return false;
  }

  isInPeriod(refDate, begin, end) {
    return refDate && this.dayjs(refDate).diff(begin) >= 0 && this.dayjs(refDate).diff(end) <= 0;
  }

  /**
   * begin到end在本周
   * @param {*} begin
   * @param {*} end
   */
  periodIsThisWeek(begin, end, refDate) {
    const week = this.getWeekBeginAndEnd(refDate);

    const beginBeforeThisWeek = this.dayjs(begin).diff(week.begin) <= 0;
    if (!end && beginBeforeThisWeek) return true;

    if (
      (this.dayjs(begin).diff(week.begin) <= 0 && this.dayjs(end).diff(week.begin) >= 0) ||
      (this.dayjs(begin).diff(week.begin) >= 0 && this.dayjs(begin).diff(week.end) <= 0)
    ) {
      return true;
    }
    return false;
  }

  /**
   * begin到end在本月
   * @param {*} begin
   * @param {*} end
   */
  periodIsThisMonth(begin, end, refDate) {
    const month = this.getMonthBeginAndEnd(refDate);
    if (
      (this.dayjs(begin).diff(month.begin) <= 0 && this.dayjs(end).diff(month.begin) >= 0) ||
      (this.dayjs(begin).diff(month.begin) >= 0 && this.dayjs(begin).diff(month.end) <= 0)
    ) {
      return true;
    }
    return false;
  }

  /**
   * 判断date是否为refDate
   * @param {*} date
   * @param {*} refDate
   * @returns
   */
  dateIsRefDate(date, refDate) {
    if (this.dayjs(date).diff(refDate, "day") === 0) {
      return true;
    }
    return false;
  }

  isPast(refDate) {
    if (this.dayjs(refDate).diff(this.showDate(), "day") < 0 && this.isToday(refDate)) {
      return true;
    }
    return false;
  }

  isGoing(refDate) {
    if (this.dayjs(refDate).diff(this.showDate(), "day") <= 0) {
      return true;
    }
    return false;
  }

  isNotPast(refDate) {
    if (this.dayjs(refDate).diff(this.showDate(), "day") >= 0) {
      return true;
    }
    return false;
  }

  isToday(refDate) {
    if (this.showDate() === this.showDate(refDate) && this.dayjs().date() === this.dayjs(refDate).date()) {
      return true;
    }
    return false;
  }

  isSomeDay(someday, refDate) {
    if (this.showDate(someday) === this.showDate(refDate) && this.dayjs(someday).date() === this.dayjs(refDate).date()) {
      return true;
    }
    return false;
  }

  print(msg, style) {
    if (!this.enable_print) {
      return;
    }

    if (style) {
      switch (style) {
        case "info":
        case "blue":
        default:
          console.log(`%c${msg}`, "color:#2289DB; font-weight:bold;");
          break;

        case "yellow":
        case "warning":
          console.log(`%c${msg}`, "color:#f0ad4e; font-weight:bold;");
          break;

        case "green":
        case "success":
          console.log(`%c${msg}`, "color:#5cb85c; font-weight:bold;");
          break;

        case "red":
        case "danger":
          console.log(`%c${msg}`, "color:#EF0000; font-weight:bold;");
          break;
      }
    } else {
      console.log(msg);
    }
  }

  getExtname(filepath) {
    if (typeof filepath !== "string") return "";
    const temp = filepath.split(".");
    return temp[temp.length - 1];
  }

  getFilename(filepath) {
    if (typeof filepath !== "string") return "";
    const temp = filepath.split("/");
    const fullname = temp[temp.length - 1];
    const temp1 = fullname.split(".");
    return temp1[0];
  }

  getFilenameWithExt(filepath) {
    if (typeof filepath !== "string") return "";
    const temp = filepath.split("/");
    return temp[temp.length - 1];
  }

  gotoPage(filepath) {
    window.location.href = filepath;
  }

  goto(url) {
    const el = document.createElement("a");
    document.body.appendChild(el);
    el.href = url;
    el.target = "_blank";
    el.click();
    document.body.removeChild(el);
  }

  buildCommonSendData(data) {
    return Object.assign(data, {
      // Add Static Data here ...
    });
  }

  scroll2Top() {
    this.$("html,body").animate(
      {
        scrollTop: 0,
      },
      200
    );
  }

  scrollTo(px) {
    this.$("html,body").animate(
      {
        scrollTop: px,
      },
      200
    );
  }

  getAbstract(abstract) {
    try {
      const str = this.marked(abstract);
      if (!str) {
        return str;
      }
      return str.replace(/<[^>]+>/g, ""); // 去掉所有的html标记
    } catch (err) {
      return abstract;
    }
  }

  gotoId(id, parentId, offset = 0) {
    const containerId = parentId ? `#${parentId}` : "html,body";
    const container = this.$(containerId) || {};
    const scrollTo = this.$(`#${id}`) || {};
    const scrollToOffset = scrollTo.offset() || {};
    const top = scrollToOffset.top - container.offset().top + container.scrollTop();
    container.animate({
      scrollTop: top + offset,
    });
  }

  generateSeed(length = 20) {
    return generateSeed(length);
  }

  convertJSONData(data) {
    try {
      // eslint-disable-next-line no-new-func
      return Function(`return ${data}`)();
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  getTypeCss(type) {
    let typeName = type;
    switch (type) {
      case "Schedule":
      case "schedule":
        typeName = `<span class="badge rounded-pill bg-primary">报表Schedule</span>`;
        break;
      case "Map":
        typeName = `<span class="badge rounded-pill bg-success">Map</span>`;
        break;
      case "object":
        typeName = `<span class="badge rounded-pill bg-light text-dark">Object</span>`;
        break;
      case "number":
        typeName = `<span class="badge rounded-pill bg-dark">number</span>`;
        break;
      case "value":
        typeName = `<span class="badge rounded-pill bg-dark">数值Value</span>`;
        break;
      case "percentage":
        typeName = `<span class="badge rounded-pill bg-dark">百分比数值Percentage</span>`;
        break;
      case "number(Double)":
        typeName = `<span class="badge rounded-pill bg-dark">数值Double</span>`;
        break;
      case "string":
        typeName = `<span class="badge rounded-pill bg-info">字符串(${type})</span>`;
        break;
      case "string(date)":
        typeName = `<span class="badge rounded-pill bg-info">字符串(日期)</span>`;
        break;
      case "date":
        typeName = `<span class="badge rounded-pill bg-success">日期Date</span>`;
        break;
      case "boolean":
        typeName = `<span class="badge rounded-pill bg-danger">布尔值${type}</span>`;
        break;
      default:
        typeName = `<span class="badge rounded-pill bg-secondary">${type}</span>`;
        break;
    }
    return typeName;
  }

  getBadge(text, bg) {
    return `<span class="badge bg-${bg} rounded-pill">${text}</span>`;
  }

  getCode(text) {
    return `<code>${text}</code>`;
  }

  getRenderedObj(obj, language = "json") {
    if (!this.hljs) {
      console.log("hightlight.js is not initialized");
      return "";
    }
    const objString = JSON.stringify(obj, null, 2);
    const example =
      typeof objString === "string"
        ? this.hljs.highlight(objString, {
            language,
          }).value
        : objString;
    return `
      <div style="background: #333; color: #fff; padding-left:6px; padding-top:4px; overflow-y:auto; max-height:260px;" class="scrollbar">
        <pre><code>${example || ""}</code></pre>
      </div>
    `;
  }

  padStr(number) {
    if (number < 10) return `0${number}`;
    return `${number}`;
  }

  getStatusCode(url, statusCode, statusOnly) {
    let statusLabel = "";
    let urlLabel = "";
    switch (Number(statusCode)) {
      case 200:
      case 201:
      case 204:
        statusLabel = `<span class="badge bg-success">${statusCode}</span>`;
        urlLabel = `<span class="text-success">${url}</span>`;
        break;

      case 400:
      case 401:
      case 404:
      case 422:
        statusLabel = `<span class="badge bg-warning">${statusCode}</span>`;
        urlLabel = `<span class="text-warning">${url}</span>`;
        break;

      case 500:
      case 502:
        statusLabel = `<span class="badge bg-danger">${statusCode}</span>`;
        urlLabel = `<span class="text-danger">${url}</span>`;
        break;

      default:
        statusLabel = `<span class="badge bg-secondary">${statusCode}</span>`;
        urlLabel = `<span class="text-secondary">${url}</span>`;
        break;
    }
    if (statusOnly) return statusLabel;
    return `${statusLabel} ${urlLabel}`;
  }

  getSize(size) {
    if (isNaN(Number(size))) return `- KB`;
    size = parseInt(Number(size)) || 0;
    if (size <= 1024) return `${size} B`;
    if (size <= 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    if (size <= 1024 * 1024 * 1024) return `${(size / 1024 / 1024).toFixed(2)} MB`;
    // if (size <= 1024 * 1024 * 1024 * 1024)
    return `${(size / 1024 / 1024 / 1024).toFixed(2)} GB`;
  }

  getTime(seconds) {
    if (isNaN(Number(seconds))) return `- s`;
    seconds = parseInt(Number(seconds)) || 0;
    if (seconds <= 60) return `${seconds} s`;
    if (seconds <= 60 * 60) return `${(seconds / 60).toFixed(2)} min`;
    if (seconds <= 60 * 60 * 60) return `${(seconds / 60 / 60).toFixed(2)} h`;
    // if (seconds <= 60 * 60 * 60 * 24)
    return `${(seconds / 60 / 60 / 24).toFixed(2)} d`;
  }

  monitSwipe(id, methods = {}) {
    this.$(`#${id}`).unbind("touchstart");
    this.$(`#${id}`).unbind("touchmove");
    this.$(`#${id}`).unbind("touchend");
    let xPos, yPos;
    let swipeX, swipeY;
    const { moveLeft, moveRight, onProgress, onTouchEnd, moveTop, moveBottom } = methods;
    document.getElementById(id).addEventListener("touchstart", event => {
      xPos = event.changedTouches[0].pageX;
      yPos = event.changedTouches[0].pageY;
      swipeX = true;
      swipeY = true;
    });
    document.getElementById(id).addEventListener("touchmove", event => {
      const _xPos = event.changedTouches[0].pageX;
      const _yPos = event.changedTouches[0].pageY;
      const xOff = Math.abs(xPos - _xPos);
      const yOff = Math.abs(yPos - _yPos);

      const sensitivity = true; // yOff < 4 && xOff > 20

      // 左右滑动
      if (swipeX && xOff - yOff > 60 && sensitivity) {
        // 阻止事件冒泡
        event.stopPropagation();
        if (xPos - _xPos > 10) {
          // 右滑
          event.preventDefault();

          if (typeof onProgress === "function") {
            onProgress("right", xPos - _xPos);
          }
        }
        if (_xPos - xPos > 10) {
          // 左滑
          event.preventDefault();

          if (typeof onProgress === "function") {
            onProgress("left", _xPos - xPos);
          }
        }
        swipeY = false;
      }

      // 上下滑动
      if (swipeY && xOff - yOff < 0) {
        swipeX = false;
      }
    });

    document.getElementById(id).addEventListener("touchend", event => {
      const _xPos = event.changedTouches[0].pageX;
      const _yPos = event.changedTouches[0].pageY;
      const xOff = Math.abs(xPos - _xPos);
      const yOff = Math.abs(yPos - _yPos);

      const sensitivity = true; // yOff < 4 && xOff > 20

      // 左右滑动
      if (swipeX && xOff - yOff > 60 && sensitivity) {
        // 阻止事件冒泡
        event.stopPropagation();
        if (xPos - _xPos > 120) {
          // 右滑
          event.preventDefault();

          if (typeof onTouchEnd === "function") {
            onTouchEnd(xPos - _xPos);
          }
          if (typeof moveLeft === "function") {
            moveLeft();
          }
        }
        if (_xPos - xPos > 120) {
          // 左滑
          event.preventDefault();

          if (typeof onTouchEnd === "function") {
            onTouchEnd(_xPos - xPos);
          }
          if (typeof moveRight === "function") {
            moveRight();
          }
        }
        swipeY = false;
      }

      // 上下滑动
      if (swipeY && xOff - yOff < 0) {
        swipeX = false;
        if (yPos - _yPos > 0) {
          if (typeof moveTop === "function") {
            moveTop(yPos - _yPos);
          }
        } else {
          if (typeof moveBottom === "function") {
            moveBottom(_yPos - yPos);
          }
        }
      }
    });
  }

  monitTouching(id, startCB, stopCB, treshold = 550) {
    this.$(`#${id}`).unbind("touchstart");
    this.$(`#${id}`).unbind("touchmove");
    this.$(`#${id}`).unbind("touchend");
    let timeOutEvent = null;
    document.getElementById(id).addEventListener("touchstart", function (e) {
      // 长按事件触发
      timeOutEvent = setTimeout(async function () {
        timeOutEvent = 0;
        if (typeof startCB === "function") await startCB();
      }, treshold);
    });
    document.getElementById(id).addEventListener("touchmove", function () {
      clearTimeout(timeOutEvent);
      timeOutEvent = 0;
    });
    document.getElementById(id).addEventListener("touchend", async function () {
      clearTimeout(timeOutEvent);
      if (timeOutEvent !== 0) {
        if (typeof stopCB === "function") await stopCB();
      }
      return false;
    });
  }

  sleep(ms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(ms);
      }, ms);
    });
  }

  renderTOC(selector, params = {}) {
    const { useAnimation, parentId, bind } = params;

    function resetLevels(levels, currLevel) {
      for (let index = 0; index < levels.length; index++) {
        if (index >= currLevel) levels[index] = null;
      }
      return levels;
    }
    function renderLevels(levels) {
      let title = "";
      for (let index = 0; index < levels.length; index++) {
        const element = levels[index];
        if (element === undefined || element === null) break;
        const dot = index !== 0 && index === levels.length - 1 ? " " : ".";
        title += `${element}${dot}`;
      }
      return title;
    }
    let currLevel = 0;
    let levels = [];
    const hs = this.$(
      `${selector} h1, ${selector} h2, ${selector} h3, ${selector} h4, ${selector} h5, ${selector} h6, ${selector} h6, ${selector} h7, ${selector} h8, ${selector} h9`
    );
    let toc = "";
    const bindIds = [];
    for (let i = 0; i < hs.length; i++) {
      const element = hs[i];
      const tag = element.tagName;
      let text = element.innerText;
      const index = Number(tag.replace("H", "")) - 1;
      if (index < currLevel) {
        levels = resetLevels(levels, index + 1);
      }
      currLevel = index;
      if (levels[currLevel] === undefined) {
        levels[currLevel] = 0;
      }
      levels[currLevel] += 1;

      const hId = `reader-${this.generateSeed()}`;
      const tocId = `${hId}-toc`;
      this.$(element).attr("id", hId);
      bindIds.push({ hId, tocId });

      // console.log(tag, index, renderLevels(levels), text, currLevel);
      let dataText = this.$(element).attr("data-text");
      if (!dataText) {
        dataText = this.$(element).text();
        this.$(element).attr("data-text", dataText);
      }

      const noForTitle = renderLevels(levels);
      text = `${noForTitle}${dataText}`;
      this.$(element).text(text);

      toc += `
        <div id="${tocId}" class="toc-item limit-length hover-text" style="margin-left:${currLevel * 14}px;">
          ${text}
        </div>
      `;
    }

    const clicks = async () => {
      for (let index = 0; index < bindIds.length; index++) {
        const { hId, tocId } = bindIds[index];
        this.bindClick(`${tocId}`, async () => {
          if (useAnimation) {
            this.gotoId(hId, parentId);
          } else {
            this.gotoIdDirectly(hId);
          }
          if (typeof bind === "function") {
            await bind();
          }
        });
      }
    };

    return { toc, clicks };
  }

  bindClick(id, func) {
    this.$(`#${id}`).unbind("click");
    this.$(`#${id}`).click(func);
  }

  bindClickByName(name, func) {
    this.$(`[name="${name}"]`).unbind("click");
    this.$(`[name="${name}"]`).click(func);
  }

  bindChange(id, func) {
    this.$(`#${id}`).unbind("change");
    this.$(`#${id}`).change(func);
  }

  bindKeyup(id, func) {
    this.$(`#${id}`).unbind("keyup");
    this.$(`#${id}`).keyup(func);
  }

  gotoIdDirectly(id) {
    const element = document.getElementById(id);
    // 如果设置为 true，则该方法会将元素的顶部与视口的顶部或可滚动元素的可见区域的顶部对齐。
    // 如果设置为 false，则该方法会将元素的底部与视口的底部或可滚动元素的可见区域的底部对齐。
    element.scrollIntoView(true);
  }

  getImagesFromMDRaw(content) {
    if (typeof content !== "string") return [];

    const urls = [];
    const reg =
      /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g;
    content.replace(reg, (wholeMatch, altText, linkId, url) => {
      urls.push({
        text: wholeMatch,
        url,
        altText,
      });
    });

    return urls;
  }

  getLoading() {
    return `
      <div class="d-flex justify-content-center" style="margin-top: 40px;">
        <div class="spinner-grow text-purple" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    `;
  }

  /**
   * 替换tasklist的Markdown标记
   * @param {*} event
   * @returns
   */
  replaceTaskTodo(event, content) {
    // 找出文章内数据
    const target = this.$(event.target);
    const text = target.parent().text();
    const isChecked = target.is(":checked");

    const query = !isChecked ? `x` : ``;
    const queryText = `- [${query}]${text}`;

    // 反选
    const change = isChecked ? `x` : ``;
    const changeText = `- [${change}]${text}`;

    // 更文章内容
    const newContent = content.replace(queryText, changeText);
    return { switchON: isChecked, newContent };
  }

  renderJSON(json, id) {
    this.jsonRenderer.renderJson(json, id);
  }

  parseURLQueries(url) {
    if (!url || typeof url !== "string") return {};

    // 分割URL
    const paramArrays = url.split("&");
    paramArrays[0] = paramArrays[0].split("?");
    paramArrays[0].shift();
    paramArrays[0] = paramArrays[0].join("?");

    return paramArrays.reduce((temp, ele) => {
      const itemArr = ele.split("=");
      let key = itemArr[0];
      let val = itemArr[1];
      const arr = [];
      if (key.includes("[]")) {
        key = key.replace("[]", "");
        arr.push(val);
      } else if (val.indexOf("{") === 0) {
        val = JSON.parse(val);
      }
      temp[key] = val;
      return temp;
    }, {});
  }

  parseEndpoint(url) {
    if (!url || typeof url !== "string") return null;
    const temp = url.split("?");
    return temp[0];
  }

  renderTime(_second) {
    const second = Number(_second);
    if (isNaN(second)) return "不足1分钟";

    if (second < 60) return `${parseInt(second)}秒`;
    else if (second >= 60 && second < 3600) return `${parseInt(second / 60)}分钟${parseInt(second % 60)}秒`;
    else if (second >= 3600) return `${parseInt(second / 60 / 60)}小时${parseInt((second / 60) % 60)}分钟`;
  }

  decodeBase64(base64) {
    return decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  }

  secretIcon(params) {
    let style = "";
    Object.entries(params).reduce((temp, [attr, value]) => {
      style += ` ${attr}: ${value}; `;
      return temp + style;
    }, 0);
    return `<svg style="${style}" t="1666444901315" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1692" width="200" height="200"><path d="M818.14 133.1l-262.3-61.91a91.31 91.31 0 0 0-40.19-0.28l-283.56 62.77A90 90 0 0 0 162 231.3l55.42 516a89.62 89.62 0 0 0 49.55 71.08L489.59 929a90.33 90.33 0 0 0 81.53-0.69l212.16-109.86A89.94 89.94 0 0 0 831.46 748l55.61-517.54a90.31 90.31 0 0 0-68.93-97.36z m25.23 92.69l-55.6 517.54a46.15 46.15 0 0 1-24.7 36.1L550.91 889.24a46.32 46.32 0 0 1-41.79 0.35L286.45 779a45.94 45.94 0 0 1-25.39-36.42l-55.41-516a46.13 46.13 0 0 1 35.92-50l283.56-62.77a45.87 45.87 0 0 1 10-1.1 45.24 45.24 0 0 1 10.63 1.29l262.29 61.91a46.26 46.26 0 0 1 35.32 49.88z" p-id="1693" fill="#d81e06"></path><path d="M390.77 481q33.83-40.37 52.23-95l-32.85-7c-9.9 29.68-26.51 57.37-50.24 82.69zM522.13 415.35l27.3-19c-8.7-12.66-21-27.3-37.58-43.91l-27.3 17c15.82 16.64 28.45 32.07 37.58 45.91z" p-id="1694" fill="#d81e06"></path><path d="M393.54 348.09h261.94v51.83h36.79v-85.46H543.89c-3.95-11.88-7.51-23-11.46-32.44l-40 6.33a269.58 269.58 0 0 1 12.27 26.11h-148v85.46h36.81z" p-id="1695" fill="#d81e06"></path><path d="M617.5 418.12c24.5 29.27 43.91 56.18 58.5 80.71l30.09-20.56c-14.25-23-34.83-49.46-61.33-79.53z" p-id="1696" fill="#d81e06"></path><path d="M490.47 517.05h89.82c16.22 0 28.5-3.17 36.42-9.12 8.69-6.33 15-24.91 18.19-56.57l-35.21-11.48q-2.38 32.07-9.51 38c-3.56 3.56-9.1 5.53-17 5.53h-70c51.44-27.68 93.78-62.1 127.79-102.86l-27.29-21c-31.25 36.81-70.82 68.08-118.7 94.19v-59h-36.4v76.76q-48.09 21.38-106.83 36.81l15 31.65A799 799 0 0 0 458 505.16c6.76 7.92 17.43 11.89 32.47 11.89zM632.14 600.53H544.3v-72.81h-37.19v72.81h-84.3v-59.36h-37.19v108.42h37.19v-14.25h209.33v14.64h37.19V536.02h-37.19v64.51z" p-id="1697" fill="#d81e06"></path></svg>`;
  }
}
const PUBTOOLS = new GlobalToolsClass();

class OffcanvasModalClass {
  constructor(prefixId) {
    // eslint-disable-next-line no-undef
    this.globals = globals;
    const timestamp = this.globals.generateSeed();
    this.id = `pkc-modal-${timestamp}-${prefixId}`;
    this.showToolbar = false;
    this.closeBtn = false;
  }

  getId() {
    return this.id;
  }

  getToolbarId() {
    return `${this.id}-toolbar`;
  }

  _hide() {
    const id = this.id;
    this.globals.$(`#${id}-backdrop`).fadeOut(300);
    this.globals.$(`#${id}`).removeClass("shown");
    if (this.closeBtn) {
      this.globals.$(`#${id}-exit`).hide();
    }
  }

  _show() {
    const id = this.id;
    this.globals.$(`#${id}-backdrop`).fadeIn(300);
    this.globals.bindClick(`${id}-backdrop`, () => {
      this.hide();
    });
    this.globals.$(`#${id}`).addClass("shown");

    if (this.closeBtn) {
      this.globals.$(`#${id}-exit`).show();
    }
  }

  /**
   * 初始化
   */
  init(params, options = {}) {
    const id = this.id;
    const exitId = `${id}-exit`;

    const { closeBtn, closeBtnStyles, closeBtnClasses } = options;
    this.closeBtn = closeBtn;

    const closeBtnHTML = `
        <span class="circle-btn art-btn-exit ${closeBtnClasses}" style="display: none; z-index: 100000; ${closeBtnStyles}" id="${exitId}">
          <i class="fa-solid fa-remove"></i>
        </span>
      `;
    const modal = `
      <div id="${id}" class="pkc-modal">
        <div id="${id}-backdrop" class="pkc-backdrop"></div>
        ${closeBtnHTML}
        <div id="${id}-body" class="pkc-modal-body scrollbar-purple"></div>
        <div id="${id}-toolbar" class="article-modal-toolbar"></div>
      </div>
    `;
    this.globals.$("body").append(modal);

    this.globals.bindClick(exitId, () => {
      this.hide();
    });

    // 设置参数
    if (params) {
      this.setParams(params);
    }
  }

  setToolbar(toolbar) {
    this.showToolbar = true;
    this.globals.$(`#${this.id}-toolbar`).html(toolbar);
  }

  isActive() {
    const id = this.id;
    if (this.globals.$(`#${id}`).attr("aria-modal")) {
      return true;
    }
    return false;
  }

  setParams(params) {
    const id = this.id;

    // Class伪类
    if (params.classes && Array.isArray(params.classes)) {
      params.classes.reduce((temp, value) => {
        this.globals.$(`#${id}-body`).addClass(value);
        return temp;
      }, 0);
      delete params.classes;
    }

    // css
    Object.entries(params).reduce((temp, [attr, value]) => {
      this.globals.$(`#${id}`).css(attr, value);
      return temp;
    }, 0);
  }

  /**
   * 设置并显示
   */
  show(html, clicks, params, events) {
    const id = this.id;
    if (this.showToolbar) {
      this.globals.$(`#${this.id}-toolbar`).show();
      setTimeout(() => {
        this.globals.$(`#${this.id}-toolbar`).addClass("active");
      }, 0);
    }

    // 设置参数
    if (params) {
      this.setParams(params);
    }

    // 渲染
    this.globals.$(`#${id}-body`).html(html);
    this.globals.$(`#${id}-body`).scrollTop(0);

    // 绑定事件
    if (clicks && typeof clicks === "function") {
      clicks();
    }

    // 监听事件
    if (events) {
      // Supported Events
      // show.bs.offcanvas	This event fires immediately when the show instance method is called.
      // shown.bs.offcanvas	This event is fired when an offcanvas element has been made visible to the user (will wait for CSS transitions to complete).
      // hide.bs.offcanvas	This event is fired immediately when the hide method has been called.
      // hidden.bs.offcanvas	This event is fired when an offcanvas element has been hidden from the user (will wait for CSS transitions to complete).
      for (let index = 0; index < Object.keys(events).length; index++) {
        const [event, func] = Object.entries(events)[index];
        const offcanvas = document.getElementById(id);
        const listener = () => {
          offcanvas.removeEventListener(event, listener);
          func();
        };
        offcanvas.addEventListener(event, listener);
      }
    }

    this._show();
  }

  recover() {
    this._show();
  }

  /**
   * 隐藏
   */
  hide() {
    this.showToolbar = false;
    this.globals.$(`#${this.id}-toolbar`).removeClass("active");

    this.hideToolbar();
    this._hide();
  }

  hideToolbar() {
    this.globals.$(`#${this.id}-toolbar`).removeClass("enlarge");
  }
}
