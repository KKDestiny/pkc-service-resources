// eslint-disable-next-line no-undef
class HomePageClass extends PageBaseClass {
  constructor(options = {}) {
    super(options);

    // IDs
    this.containerId = `nav-home-panel`;
    this.homeId = "nav-home";
    this.ids = {};

    // Datas
    this.data = {};

    // Modals
    this.bottomModal = new this.Offcanvas(this.containerId);

    // Paths
    this.APP_ROUTE = this.globals.APP_ROUTE;
    this.APP_STATICS_PATH = this.globals.APP_STATICS_PATH;
    this.APP_BOOKS_PATH = this.globals.APP_BOOKS_PATH;
    this.APP_ARTS_PATH = this.globals.APP_ARTS_PATH;

    // Constants
    this.beianhao = `粤ICP备16086248号-2`;
  }

  generateSeed() {
    return this.globals.generateSeed();
  }

  /**
   * 我的简历
   */
  getResumes() {
    const html = `
      <div class="col-10" style=";">
        <div class="pkc-main-block top-block">
          <div class="pkc-title">我的简历</div>
          
          <div class="row" style=";">
            <div class="col-4">
              <div class="small-text" style="margin: 6px;">最新</div>
              <div class="book-item" onclick="globals.simpleDark('暂不支持下载，可以看看我的历史简历或转入我的个人网站看看')">最新简历</div>
            </div>
            <div class="col-4">
              <div class="small-text" style="margin: 6px;">历史简历</div>
              <div class="book-item" onclick="globals.goto('${this.APP_BOOKS_PATH}/resumes/林晓州的个人简历-20200204-v4.pdf')">2020年2月</div>
            </div>
          </div>
        </div>
      </div>
    `;
    const clicks = () => {};
    return { html, clicks };
  }

  /**
   * 精品资料
   */
  getGoodBooks() {
    const html = `
      <div class="col-10" style=";">
        <div class="pkc-main-block top-block">
          <div class="pkc-title">精品资料</div>
          
          <div class="row" style=";">
            <div class="col-4">
              <div class="book-item" onclick="globals.goto('${this.APP_BOOKS_PATH}/stb')">机顶盒的故事</div>
            </div>
          </div>
        </div>
      </div>
    `;
    const clicks = () => {};
    return { html, clicks };
  }

  /**
   * 陈列柜
   */
  getGallerys() {
    const apksPath = `${this.APP_ARTS_PATH}/apks`;
    const desktopsPath = `${this.APP_ARTS_PATH}/desktops`;
    const websitesPath = `${this.APP_ARTS_PATH}/websites`;

    const html = `
      <div class="col-10" style=";">
        <div class="pkc-main-block top-block">
          <div class="pkc-title">陈列柜</div>
          
          <div class="row" style=";">
            <div class="col-4">
              <div class="small-text" style="margin: 6px;">手机APP</div>
              <div class="book-item" onclick="globals.goto('${apksPath}/task')">
                拾者
                <img src='${apksPath}/task/img/logo.png' style="height: 20px;" class="float-end" />
              </div>
              <div class="book-item" onclick="globals.goto('${apksPath}/babycare')">
                宝护
                <img src='${apksPath}/babycare/img/logo.png' style="height: 20px;" class="float-end" />
              </div>
              <div class="book-item" onclick="globals.goto('${apksPath}/better-pregnancy-apk')">
                好孕APK
                <img src='${apksPath}/better-pregnancy-apk/img/logo.png' style="height: 20px;" class="float-end" />
              </div>
              <div class="book-item" onclick="globals.goto('${apksPath}/lin')">
                孤岛笔记
                <img src='${apksPath}/lin/img/logo.png' style="height: 20px;" class="float-end" />
              </div>
            </div>

            <div class="col-4">
              <div class="small-text" style="margin: 6px;">电脑软件</div>
              <div class="book-item" onclick="globals.goto('${desktopsPath}/amsstoolbox')">
                AMSS TOOLBOX
                <img src='${desktopsPath}/amsstoolbox/img/logo.png' style="height: 20px;" class="float-end" />
              </div>
              <div class="book-item" onclick="globals.goto('${desktopsPath}/better-pregnancy')">
                好孕
                <img src='${desktopsPath}/better-pregnancy/img/logo.png' style="height: 20px;" class="float-end" />
              </div>
              <div class="book-item" onclick="globals.goto('${desktopsPath}/easypm')">
                EasyPM
                <img src='${desktopsPath}/easypm/favicon.ico' style="height: 20px;" class="float-end" />
              </div>
              <div class="book-item" onclick="globals.goto('${desktopsPath}/easyebc')">
                EasyEBC
                <img src='${desktopsPath}/easyebc/img/logo.png' style="height: 20px;" class="float-end" />
              </div>
            </div>

            <div class="col-4">
              <div class="small-text" style="margin: 6px;">网站&综合系统</div>
              <div class="book-item" onclick="globals.goto('${websitesPath}/onelib')">
                OneLib智库
                <img src='${websitesPath}/onelib/favicon.ico' style="height: 20px;" class="float-end" />
              </div>
              <div class="book-item" onclick="globals.goto('${websitesPath}/kcms')">
                KCMS
                <img src='${websitesPath}/kcms/favicon.ico' style="height: 20px;" class="float-end" />
              </div>
              <div class="book-item" onclick="globals.goto('${websitesPath}/aituna')">
                爱吐纳
                <img src='${websitesPath}/aituna/favicon.ico' style="height: 20px;" class="float-end" />
              </div>
              <div class="book-item" onclick="globals.goto('${websitesPath}/tangyuanlive')">
                汤圆直播
                <img src='${websitesPath}/tangyuanlive/favicon.ico' style="height: 20px;" class="float-end" />
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    const clicks = () => {};
    return { html, clicks };
  }

  /**
   * 小玩意
   */
  getSmallThings() {
    const html = `
      <div class="col-10" style=";">
        <div class="pkc-main-block top-block">
          <div class="pkc-title">小玩意</div>
          
          <div class="row" style=";">
            <div class="col-4">
              <div class="book-item" onclick="globals.goto('${this.APP_ARTS_PATH}/smallthings/b5-jquery-gantt')">任务甘特图</div>
              <div class="book-item" onclick="globals.goto('${this.APP_ARTS_PATH}/smallthings/hanzi')">寻找键盘上失落的文字</div>
            </div>
            <div class="col-4">
              <div class="book-item" onclick="globals.goto('${this.APP_ARTS_PATH}/smallthings/konka/KONKA_STB_Manual_Guide')">机顶盒说明书</div>
              <div class="book-item" onclick="globals.goto('${this.APP_ARTS_PATH}/smallthings/konka/KONKA_STB_Upgrade_Program_Proposal_For_Client')">机顶盒大网升级建议书</div>
              <div class="book-item" onclick="globals.goto('${this.APP_ARTS_PATH}/smallthings/konka/StringProcess')">字符串处理工具</div>
              <div class="book-item" onclick="globals.goto('${this.APP_ARTS_PATH}/smallthings/konka/TestDoc')">机顶盒测试教程</div>
            </div>
            <div class="col-4">
            </div>
          </div>
        </div>
      </div>
    `;
    const clicks = () => {};
    return { html, clicks };
  }

  /**
   * 底部
   */
  getFooterBlock() {
    const year = new Date().getFullYear();
    const html = `
      <div class="col-12 text-center pkc-footer footer-text not-select" style="margin-top: 80px; font-size: 0.8em; margin-bottom: 60px">
        <div style="margin-top: 6px;">
          <img src="${this.APP_STATICS_PATH}/images/logo.png" draggable="false" style="width: 30px;">
        </div>
        <div style="margin-top: 8px;" class="">©2016~${year} 版权所有</div>
        <div style="margin-top: 4px;">
          此网站隶属于林晓州的个人知识中心PKC
        </div>
        <div style="line-height: 24px">
          包含UI设计、前后端开发及部署，基本技术栈为
          jQuery、<a class="hover-text" href='http://www.typescriptlang.org/' target="_blank">typescript</a>、
          <a class="hover-text" href='https://docs.mongodb.com/manual//' target="_blank">MongoDB</a> 和
          <a class="hover-text" href='http://expressjs.com/' target="_blank">Express</a> 
        </div>
        <div style="margin-top: 6px;">
          <a class="hover-text" href='https://beian.miit.gov.cn/' target="_blank">${this.beianhao}</a>
        </div>
      </div>
    `;
    const clicks = () => {};
    return { html, clicks };
  }

  async init() {
    this.initComponent({ style: "display:none;", classes: "flow-up" });

    // Modals
    // DO NOT CHANGE THE ORDER!!!!
    this.bottomModal.init({ classes: ["bottom-panel"] });
  }

  async show() {
    this.suspend = false;
    this.onProc();
    if (!this.needRefresh) {
      return;
    }
    this.needRefresh = true;

    const { html: resumes, clicks: clicksResumes } = this.getResumes();
    const { html: goodBooks, clicks: clicksGoodBooks } = this.getGoodBooks();
    const { html: gallerys, clicks: clicksGallerys } = this.getGallerys();
    const { html: footer, clicks: clicksFooter } = this.getFooterBlock();
    const { html: smallThings, clicks: clicksSmallThings } = this.getSmallThings();

    const panel = `
      <div class="row justify-content-around pkc-panel-block" style="background-image: url('${this.APP_STATICS_PATH}/images/logo-bg.png');">
        <div class="col-10" style=";">
          <div class="pkc-main-block pkc-main-block-more top-block">
            <div class="pkc-content" style="font-size: 2.8em;">
              资源分享中心
            </div>
            <div class="pkc-content hover-text" onclick="globals.goto('https://linxiaozhou.com')" style="font-size: 1.0em;">
              Powered By linxiaozhou.com
            </div>
          </div>
        </div>
        
        <!-- 我的简历 -->
        ${resumes}
        
        <!-- 精品资料 -->
        ${goodBooks}
        
        <!-- 陈列柜 -->
        ${gallerys}
        
        <!-- 小玩意 -->
        ${smallThings}

        <!-- 底部 -->
        ${footer}
      </div>
    `;
    this.globals.$(`#${this.containerId}`).html(panel);
    this.globals.$(`#${this.containerId}`).addClass("ease-color");
    setTimeout(() => {
      this.globals.$(`#${this.containerId}`).show();
      this.globals.$(`#${this.containerId}`).addClass("flow-up-active");

      setTimeout(() => {
        this.globals.$(`#${this.containerId}`).removeClass("flow-up flow-up-active");
      }, 300);
    }, 200);

    // Clicks for each modules
    clicksGoodBooks();
    clicksGallerys();
    clicksFooter();
    clicksSmallThings();

    const clicks = () => {};

    // Clicks
    clicks();

    // 退出按钮
    this.globals.bindClick(`${this.containerId}-exit-btn`, async () => {
      await this.exit();
    });
  }
}
