const { Browser } = require("selenium-webdriver");
const loginPage = require("../pageobjects/login.page");
const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

describe("Home Page", () => {
  before(async () => {
    await LoginPage.open();
  });

  it("should validate page title", async () => {
    await expect(browser).toHaveTitle("Alex Cuadra's Portfolio");
  });

  it("Validate list elements in Navbar Components", async () => {
    const formHeaders = await LoginPage.navbarElement;
    expect(formHeaders.length).toEqual(3);
    formHeaders[0].scrollIntoView();
    expect(await formHeaders[0].getText()).toEqual("Home");
    formHeaders[1].scrollIntoView();
    expect(await formHeaders[1].getText()).toEqual("My Projects");
    formHeaders[2].scrollIntoView();
    expect(await formHeaders[2].getText()).toEqual("Download CV");
  });

  it("Validate Title & Subtitle", async () => {
    expect(await LoginPage.title.getText()).toEqual("Hi ! I'm Alex");
    expect(await LoginPage.subTitle.getText()).toEqual("Frontend developer focused on take awesome designs to the Web.");
    //  Alter text
  });

  it("Validate Check my work - Github", async () => {
    const formHeaders = await LoginPage.navbarContact;
    expect(await formHeaders[0].getText()).toEqual("Check my work");

    await formHeaders[0].click();

    const windowHandles = await browser.getWindowHandles();
    await browser.switchToWindow(windowHandles[1]);
    expect(await browser.getUrl()).toEqual("https://github.com/alexcu21");
    await browser.switchToWindow(windowHandles[0]);
  });

  it("Validate Let's connect - Linkedin", async () => {
    const formHeaders = await LoginPage.navbarContact;
    expect(await formHeaders[1].getText()).toEqual("Let's connect");
    await formHeaders[1].click();

    const windowHandles = await browser.getWindowHandles();
    await browser.switchToWindow(windowHandles[2]);
    expect(await browser.getUrl()).toEqual("https://www.linkedin.com/in/alex-cuadra/");
    await browser.switchToWindow(windowHandles[0]);
  });

  it("Contribute to community - Wp Article", async () => {
    const formHeaders = await LoginPage.navbarContact;
    expect(await formHeaders[2].getText()).toEqual("Contribute to community");

    await formHeaders[2].click();
    const windowHandles = await browser.getWindowHandles();
    await browser.switchToWindow(windowHandles[3]);
    expect(await browser.getUrl()).toEqual("https://profiles.wordpress.org/alexcu21/profile/");
    await browser.switchToWindow(windowHandles[0]);
  });

  // it("Validate list contact elements", async () => {
  //   const formHeaders = await LoginPage.navbarContact;
  //   expect(formHeaders.length).toEqual(3);
  //   // formHeaders[0].scrollIntoView();
  //   expect(await formHeaders[0].getText()).toEqual("Check my work");
  //   // formHeaders[1].scrollIntoView();
  //   expect(await formHeaders[1].getText()).toEqual("Let's connect");
  //   // formHeaders[2].scrollIntoView();
  //   expect(await formHeaders[2].getText()).toEqual("Contribute to community");
  // });

  // it("Validate list contact elements redirection ", async () => {
  //   const formHeaders = await LoginPage.navbarContact;
  //   await formHeaders[0].click();
  //   await browser.pause(2000);
  //   await formHeaders[1].click();
  //   await browser.pause(2000);
  //   await formHeaders[2].click();
  //   await browser.pause(2000);

  //   //dividirlo 1. por 1. validar texto. click compare browser get url equal
  // });

  // it("Validate list latest Projects", async () => {
  //   const cardProject = await LoginPage.latestProjectList.$$(" div.css-1lda7xt.eqzxucj5 > article");
  //   expect(cardProject.length).toEqual(3);

  //   console.log("*****");
  //   console.log(LoginPage.latestProjectListOptions[0].getText());
  //   expect(await LoginPage.latestProjectListOptions.isDisplayed()).toBeTruthy();

  //   await loginPage.firstProject.click();
  //   await browser.pause(5000);
  //   await loginPage.firstProjectCode.click();
  //   await browser.pause(5000);
  //   await loginPage.secondProject.click();
  //   await browser.pause(5000);
  //   await loginPage.secondProjectCode.click();
  //   await browser.pause(5000);
  //   await loginPage.thirdProject.click();
  //   await browser.pause(5000);
  //   await loginPage.thirdProjectCode.click();
  //   await browser.pause(5000);
  // });

  // it("Posts (from others) You Must Read", async () => {
  //   const cardProject = await LoginPage.latestProjectList.$$(" div.css-1lda7xt.eqzxucj5 > article");
  //   expect(cardProject.length).toEqual(3);

  //   console.log("*****");
  //   console.log(LoginPage.latestProjectListOptions[0].getText());
  //   expect(await LoginPage.latestProjectListOptions.isDisplayed()).toBeTruthy();

  //   await loginPage.firstProject.click();
  //   await browser.pause(5000);
  //   await loginPage.firstProjectCode.click();
  //   await browser.pause(5000);
  //   await loginPage.secondProject.click();
  //   await browser.pause(5000);
  //   await loginPage.secondProjectCode.click();
  //   await browser.pause(5000);
  //   await loginPage.thirdProject.click();
  //   await browser.pause(5000);
  //   await loginPage.thirdProjectCode.click();
  //   await browser.pause(5000);
  // });

  //
});
