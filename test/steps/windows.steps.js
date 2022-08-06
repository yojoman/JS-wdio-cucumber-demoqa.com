const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const windowsPage = require("../pageobject/windows.page");

Then(/^I expect to see "(.*)" button$/, async (button) => {
  await windowsPage.getButton(button).waitForDisplayed();
  expect(await windowsPage.getButton(button).isDisplayed()).to.be.equal(true);
});

Then(/^I expect to see New Tab opened with "(.*)" url$/, async (url) => {
  await browser.switchWindow(url);
  expect(await browser.getUrl()).to.equal(url);
});

Then(/^Text "(.*)" can be seen$/, async (text) => {
  await windowsPage.getNewTabeTitle(text).waitForDisplayed();
  expect(await windowsPage.getNewTabeTitle(text).isDisplayed()).to.equal(true);
  await browser.closeWindow();
});

When(/^I switch to "(.*)" page$/, async (url) => {
  await browser.switchWindow(url);
});

Then(/^I expect to see New Window opened with "(.*)" url$/, async (url) => {
  await browser.switchWindow(url);
  expect(await browser.getUrl()).to.equal(url);
});

Then(
  /^I expect to see New Window Message opened with "(.*)" text$/,
  async (text) => {
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    //await browser.pause(3000);
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
    //expect(await windowsPage.allertsText).to.be.contain(text);
    // const alertText = browser.getAlertText();
    // assert.equal(text, alertText);
    //await browser.pause(3000);
    // НЕТ АССЕРШЕНА ТУТ!!!!!!!!
  }
);
//SC2

Then(
  /^I expect to see modal window opened with "(.*)" title$/,
  async (text) => {
    await windowsPage.getModalTitle(text).waitForDisplayed();
    expect(await windowsPage.getModalTitle(text).isDisplayed()).to.equal(true);
  }
);

Then(/^I expect no longer see modal window$/, async () => {
  await windowsPage.bodyOfModalWindow.waitForDisplayed({ reverse: true });
  expect(await windowsPage.bodyOfModalWindow.isDisplayed()).to.equal(false);
});