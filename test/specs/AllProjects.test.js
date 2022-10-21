const { Browser } = require("selenium-webdriver");
const loginPage = require("../pageobjects/login.page");
const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

describe("All Projects Page", () => {
  before(async () => {
    await LoginPage.open();
  });
  // div > a:nth-child(1)
  it("Validate All project List", async () => {
    const formHeaders = await LoginPage.navbarElement;
    expect(await formHeaders[1].getText()).toEqual("My Projects");
    await formHeaders[1].click();
    expect(await browser.getUrl()).toEqual("https://www.alexcuadra.dev/all-projects/");
  });

  it("Validate number of projects added ", async () => {
    const formHeaders = await LoginPage.navbarElement;
    await formHeaders[1].click();
    const list = await LoginPage.AllProjectPage;
    expect(await list.length).toEqual(5);
  });
});
