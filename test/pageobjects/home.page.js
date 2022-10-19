const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get title() {
    return $("#root > header > div.css-qypr2y.e1x7rdba4 > div.css-6kppik.e1x7rdba2 > h1");
  }

  get subTitle() {
    return $("#root > header > div.css-qypr2y.e1x7rdba4 > div.css-gy6k7w.e1x7rdba1 > p");
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("/");
  }
}

module.exports = new LoginPage();
