const { Before, Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const elementsPage = require("../pageobject/elements.page");

Given(/^I am on the "(.*)" page$/, async (title) => {
  await elementsPage.open();
  await elementsPage.title(title).waitForDisplayed();
});

When(/^I fill "(.*)" in Full Name field$/, async (fullName) => {
  await elementsPage.fullNameField.waitForDisplayed();
  await elementsPage.fullNameField.setValue(fullName);
});

Then(/^I expect to see "(.*)" in  Full Name field$/, async (fullName) => {
  expect(await elementsPage.fullNameField.getValue()).to.equal(fullName);
});

When(/^I fill "(.*)" in Email field$/, async (email) => {
  await elementsPage.emailField.waitForDisplayed();
  await elementsPage.emailField.setValue(email);
});

Then(/^I expect to see "(.*)" in Email field$/, async (email) => {
  expect(await elementsPage.emailField.getValue()).to.equal(email);
});

When(/^I fill "(.*)" in Current Address field$/, async (address) => {
  await elementsPage.currentAddressField.waitForDisplayed();
  await elementsPage.currentAddressField.setValue(address);
});

Then(/^I expect to see "(.*)" in Current Address field$/, async (address) => {
  expect(await elementsPage.currentAddressField.getValue()).to.equal(address);
});

When(/^I fill "(.*)" in Permanent Address field$/, async (address) => {
  await elementsPage.permanentAddressField.waitForDisplayed();
  await elementsPage.permanentAddressField.setValue(address);
});

Then(/^I expect to see "(.*)" in Permanent Address field$/, async (address) => {
  expect(await elementsPage.permanentAddressField.getValue()).to.equal(address);
});

When(/^I click "(.*)" button$/, async (text) => {
  await elementsPage.submitButton(text).click();
});

Then(/^I expect to see field with sent data under the text Box$/, async () => {
  await elementsPage.resultForm.waitForDisplayed();
  expect(await elementsPage.resultForm.isDisplayed()).to.equal(true);
});

Then(
  /^I expect to see "(.*)" in Name field under the Text Box$/,
  async (text) => {
    await elementsPage.nameUnderForm.waitForDisplayed();
    expect(await elementsPage.nameUnderForm.getText()).to.contain(text);
  }
);

Then(
  /^I expect to see "(.*)" in Email field under the Text Box$/,
  async (text) => {
    await elementsPage.emailUnderForm.waitForDisplayed();
    expect(await elementsPage.emailUnderForm.getText()).to.contain(text);
  }
);

Then(
  /^I expect to see "(.*)" in Current Address field under the Text Box$/,
  async (text) => {
    await elementsPage.currentAddressUnderForm.waitForDisplayed();
    expect(await elementsPage.currentAddressUnderForm.getText()).to.contain(
      text
    );
  }
);

Then(
  /^I expect to see "(.*)" in Permanent Address field under the Text Box$/,
  async (text) => {
    await elementsPage.permanentAddressUnderForm.waitForDisplayed();
    expect(await elementsPage.permanentAddressUnderForm.getText()).to.contain(
      text
    );
  }
);

Then(/^I expect to see Email field becames red$/, async () => {
  await elementsPage.emailField.waitForDisplayed();
  expect(await elementsPage.emailField.getAttribute("class")).to.contain(
    "error"
  );
  await browser.pause(3000);
});
