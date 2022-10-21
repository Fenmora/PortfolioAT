const { Browser } = require("selenium-webdriver");

const LoginPage = require("../pageobjects/login.page");

describe("All Projects Page", () => {
  before(async () => {
    await LoginPage.open();
  });

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
