const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  get title() {
    return $("#root > header > div.css-qypr2y.e1x7rdba4 > div.css-6kppik.e1x7rdba2 > h1");
  }
  get subTitle() {
    return $("#root > header > div.css-qypr2y.e1x7rdba4 > div.css-gy6k7w.e1x7rdba1 > p");
  }
  get navbarElement() {
    return $$("#root > header > nav > div");
  }
  get navbarContact() {
    return $$("#root > header > div.css-qypr2y.e1x7rdba4 > div.css-16w2kmn.e1x7rdba0 > div");
  }
  get latestProjectList() {
    return $("#root > main");
  }
  get latestProjectListOptions() {
    return $("#root > main > div.css-1lda7xt.eqzxucj5 > article:nth-child(2) > div > div.css-14otwhr.eqzxucj1 > a:nth-child(1)");
  }

  get firstProject() {
    return $('//*[@id="root"]/main/div[1]/article[1]/div/div[2]/a[1]');
  }

  get firstProjectCode() {
    return $('//*[@id="root"]/main/div[1]/article[1]/div/div[2]/a[2]');
  }

  get secondProject() {
    return $('//*[@id="root"]/main/div[1]/article[2]/div/div[2]/a[1]');
  }
  get secondProjectCode() {
    return $('//*[@id="root"]/main/div[1]/article[2]/div/div[2]/a[2]');
  }
  get thirdProject() {
    return $('//*[@id="root"]/main/div[1]/article[3]/div/div[2]/a[1]');
  }
  get thirdProjectCode() {
    return $('//*[@id="root"]/main/div[1]/article[3]/div/div[2]/a[2]');
  }

  open() {
    return super.open("");
  }
}

module.exports = new LoginPage();
