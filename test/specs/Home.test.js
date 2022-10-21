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
  });

  it("Navbar Components - Home", async () => {
    const formHeaders = await LoginPage.navbarElement;
    expect(await formHeaders[0].getText()).toEqual("Home");
    await formHeaders[0].click();
    expect(await browser.getUrl()).toEqual("https://www.alexcuadra.dev/");
  });

  it("Navbar Components - My Projects", async () => {
    const formHeaders = await LoginPage.navbarElement;
    expect(await formHeaders[1].getText()).toEqual("My Projects");
    await formHeaders[1].click();
    expect(await browser.getUrl()).toEqual("https://www.alexcuadra.dev/all-projects/");
  });

  it("Navbar Components - Download CV", async () => {
    const formHeaders = await LoginPage.navbarElement;
    expect(await formHeaders[2].getText()).toEqual("Download CV");
    await formHeaders[2].click();
    const windowHandles = await browser.getWindowHandles();
    await browser.switchToWindow(windowHandles[1]);
    expect(await browser.getUrl()).toEqual("https://dev-portfolio-alex.pantheonsite.io/wp-content/uploads/2021/12/Portfolio-AlexCuadraResume.pdf");
    await browser.closeWindow();
    await browser.switchToWindow(windowHandles[0]);
  });

  it("Validate Title & Subtitle", async () => {
    const formHeaders = await LoginPage.navbarElement;
    await formHeaders[0].click();
    expect(await LoginPage.title.getText()).toEqual("Hi ! I'm Alex");
    expect(await LoginPage.subTitle.getText()).toEqual("Frontend developer focused on take awesome designs to the Web.");
  });

  it("Validate Check my work - Github", async () => {
    const formHeaders = await LoginPage.navbarContact;
    expect(await formHeaders[0].getText()).toEqual("Check my work");

    await formHeaders[0].click();

    const windowHandles = await browser.getWindowHandles();
    await browser.switchToWindow(windowHandles[1]);
    expect(await browser.getUrl()).toEqual("https://github.com/alexcu21");
    await browser.closeWindow();
    await browser.switchToWindow(windowHandles[0]);
  });

  it("Validate Let's connect - Linkedin", async () => {
    const formHeaders = await LoginPage.navbarContact;
    expect(await formHeaders[1].getText()).toEqual("Let's connect");
    await formHeaders[1].click();

    const windowHandles = await browser.getWindowHandles();
    await browser.switchToWindow(windowHandles[1]);
    expect(await browser.getUrl()).toEqual("https://www.linkedin.com/in/alex-cuadra/");
    await browser.closeWindow();
    await browser.switchToWindow(windowHandles[0]);
  });

  it("Contribute to community - Wp Article", async () => {
    const formHeaders = await LoginPage.navbarContact;
    expect(await formHeaders[2].getText()).toEqual("Contribute to community");

    await formHeaders[2].click();
    const windowHandles = await browser.getWindowHandles();
    await browser.switchToWindow(windowHandles[1]);
    expect(await browser.getUrl()).toEqual("https://profiles.wordpress.org/alexcu21/profile/");
    await browser.closeWindow();
    await browser.switchToWindow(windowHandles[0]);
  });

  it("Validate latest Projects", async () => {
    const cardProject = await LoginPage.latestProjectList.$$(" div.css-1lda7xt.eqzxucj5 > article");
    expect(cardProject.length).toEqual(3);

    console.log("*****");
    console.log(LoginPage.latestProjectListOptions[0].getText());
    expect(await LoginPage.latestProjectListOptions.isDisplayed()).toBeTruthy();

    await loginPage.firstProject.click();
    await loginPage.firstProjectCode.click();

    await loginPage.secondProject.click();
    await loginPage.secondProjectCode.click();

    await loginPage.thirdProject.click();
    await loginPage.thirdProjectCode.click();
  });

  it("Posts (from others) You Must Read", async () => {
    const cardProject = await LoginPage.latestProjectList.$$("div.css-1lz1p8c.elxzs3s2 > div > div");
    expect(cardProject.length).toEqual(6);
    expect(await LoginPage.latestProjectListOptions.isDisplayed()).toBeTruthy();
  });

  //
});
