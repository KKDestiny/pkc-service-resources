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

    // Constants
    this.APP_ROUTE = this.globals.APP_ROUTE;
    this.APP_STATICS_PATH = this.globals.APP_STATICS_PATH;
  }

  generateSeed() {
    return this.globals.generateSeed();
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

    const panel = `
      <div class="row justify-content-around pkc-panel-block" style="background-image: url('${this.APP_STATICS_PATH}/images/logo-bg.png');">
        
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

    const clicks = () => {};

    // Clicks
    clicks();

    // 退出按钮
    this.globals.bindClick(`${this.containerId}-exit-btn`, async () => {
      await this.exit();
    });
  }
}
