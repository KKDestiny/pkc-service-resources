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
    const html = `
      <div class="col-10" style=";">
        <div class="pkc-main-block top-block">
          <div class="pkc-title">陈列柜</div>
          
          <div class="row" style=";">
            <div class="col-4">
              <div class="book-item" onclick="globals.goto('${this.APP_ARTS_PATH}/better-pregnancy')">好孕</div>
              <div class="book-item" onclick="globals.goto('${this.APP_ARTS_PATH}/better-pregnancy-apk')">好孕APK</div>
            </div>
            <div class="col-4">
              <div class="book-item" onclick="globals.goto('${this.APP_ARTS_PATH}/lin')">孤岛笔记</div>
              <div class="book-item" onclick="globals.goto('${this.APP_ARTS_PATH}/babycare')">宝护</div>
            </div>
            <div class="col-4">
              <div class="book-item" onclick="globals.goto('${this.APP_ARTS_PATH}/hanzi')">寻找键盘上失落的文字</div>
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
              <div class="book-item" onclick="globals.goto('${this.APP_ARTS_PATH}/b5a/b5-jquery-gantt')">任务甘特图</div>
            </div>
            <div class="col-4">
              <div class="book-item" onclick="globals.goto('${this.APP_ARTS_PATH}/konka/KONKA_STB_Manual_Guide')">机顶盒说明书</div>
              <div class="book-item" onclick="globals.goto('${this.APP_ARTS_PATH}/konka/KONKA_STB_Upgrade_Program_Proposal_For_Client')">机顶盒大网升级建议书</div>
              <div class="book-item" onclick="globals.goto('${this.APP_ARTS_PATH}/konka/StringProcess')">字符串处理工具</div>
              <div class="book-item" onclick="globals.goto('${this.APP_ARTS_PATH}/konka/TestDoc')">机顶盒测试教程</div>
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
