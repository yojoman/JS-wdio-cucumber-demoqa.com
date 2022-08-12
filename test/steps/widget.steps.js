const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const widgetPage = require("../pageobject/widget.page");

Then(/^I expect to see "(.*)" tab not being clickable$/, async (text) => {
  await widgetPage.getTab(text).waitForDisplayed();
  expect(await widgetPage.getTab(text).isClickable()).to.be.equal(false);
});

Then(
  /^I expect to see "(.*)" tab contains text starting with "(.*)"$/,
  async (tab, text) => {
    await widgetPage.getTabContent(tab).waitForDisplayed();
    expect(await widgetPage.getTabContent(tab).getText()).to.be.contain(text);
  }
);

Then(/^I expect to see "(.*)" menu button$/, async (text) => {
  await widgetPage.getMenuButton(text).waitForDisplayed();
  expect(await widgetPage.getMenuButton(text).isDisplayed()).to.be.equal(true);
});

When(/^I click "(.*)" menu button$/, async (text) => {
  await widgetPage.getMenuButton(text).waitForDisplayed();
  await widgetPage.getMenuButton(text).click();
});

Then(/^I expect to be on "(.*)" page$/, async (url) => {
  expect(await browser.getUrl()).to.be.equal(url);
});

When(/^I hover over "(.*)" menu button$/, async (text) => {
  await widgetPage.getMenuButton(text).moveTo();
});
