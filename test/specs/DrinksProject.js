const { Browser } = require("selenium-webdriver");
const loginPage = require("../pageobjects/login.page");
const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

describe("Home Page", () => {
  before(async () => {
    await LoginPage.open();
  });

  it.only("Validate latest Projects", async () => {
    await loginPage.thirdProject.click();
    // await loginPage.thirdProjectCode.click();
    const windowHandles = await browser.getWindowHandles();
    await browser.switchToWindow(windowHandles[1]);
    expect(await browser.getUrl()).toEqual("https://brave-panini-e2c086.netlify.app/");
    // await browser.debug();
  });

  it("Should demonstrate the selectByAttribute command", async () => {
    const selectBox = await $("category");
    const value = await selectBox.getValue();
    console.log("**ff", value); // returns "someValue0"

    // await selectBox.selectByAttribute("value", "someValue3");
    // console.log(await selectBox.getValue()); // returns "someValue3"

    // await selectBox.selectByAttribute("name", "someName5");
    // console.log(await selectBox.getValue()); // returns "someValue5"
  });
});
