const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const commonPage = require("../pages/common.page");

Given(/^I am on the "(.*)" page$/, async (text) => {
  await commonPage.open(text);
});

When(/^I back on previous page$/, async () => {
  await browser.back();
});

When(/^I click "(.*)" button$/, async (text) => {
  await commonPage.getSubmitButton(text).waitForDisplayed();
  await commonPage.getSubmitButton(text).click();
});

When(/^I fill "(.*)" in "(.*)" field$/, async (data, field) => {
  await commonPage.getTextBoxField(field).waitForDisplayed();
  await commonPage.getTextBoxField(field).setValue(data);
});

Then(/^I expect to see "(.*)" in "(.*)" field$/, async (data, field) => {
  expect(await commonPage.getTextBoxField(field).getValue()).to.equal(data);
});

Then(/^I expect to see "(.*)" tab$/, async (text) => {
  await commonPage.getTab(text).waitForDisplayed();
  expect(await commonPage.getTab(text).isDisplayed()).to.be.equal(true);
});

When(/^I click "(.*)" tab$/, async (text) => {
  await commonPage.getTab(text).click();
});

