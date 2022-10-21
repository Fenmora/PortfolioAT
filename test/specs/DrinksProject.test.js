const { Browser } = require("selenium-webdriver");
const loginPage = require("../pageobjects/login.page");
const LoginPage = require("../pageobjects/login.page");
// const SecurePage = require("../pageobjects/secure.page");

describe("Home Page", () => {
  before(async () => {
    await LoginPage.open();
  });

  it.only("Validate latest Projects", async () => {
    await loginPage.thirdProject.click();
    const windowHandles = await browser.getWindowHandles();
    await browser.switchToWindow(windowHandles[1]);
    expect(await browser.getUrl()).toEqual("https://brave-panini-e2c086.netlify.app/");

    // await browser.pause("2000");

    const selectBox = await $('[name="category"]');

    await selectBox.click();
    await browser.pause("2000");
    await selectBox.selectByAttribute("value", "Beer");
    await loginPage.btnSearchDrinks.click();
    await browser.pause("2000");
  });

  // it("Should demonstrate the selectByAttribute command", async () => {
  //   // const windowHandles = await browser.getWindowHandles();
  //   // await browser.switchToWindow(windowHandles[1]);
  //   // const selectBox = await $('[name="category"]');
  //   // expect(selectBox).toBeExisting();
  //   // // await selectBox.selectByAttribute("value", "Ordinary Drink");
  //   // await console.log("*fender", await selectBox.getValue()); // returns "someValue3"
  //   // await browser.closeWindow;
  //   // await browser.switchToWindow(windowHandles[0]);
  //   // // await selectBox.selectByAttribute("name", "someName5");
  //   // // console.log(await selectBox.getValue()); // returns "someValue5"
  // });
});
