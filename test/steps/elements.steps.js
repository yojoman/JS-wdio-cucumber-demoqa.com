const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const elementsPage = require("../pages/elements.page");

When(/^I fill inavalid data "(.*)" in "(.*)" field$/, async (data, field) => {
  await elementsPage.getTextBoxField(field).waitForDisplayed();
  await elementsPage.getTextBoxField(field).setValue(data);
});

Then(/^I expect to see field with sent data under the text Box$/, async () => {
  await elementsPage.resultForm.waitForDisplayed();
  expect(await elementsPage.resultForm.isDisplayed()).to.equal(true);
});

Then(
  /^I expect to see "(.*)" in "(.*)" field under the Text Box$/,
  async (data, field) => {
    await elementsPage.getDataUnderForm(field).waitForDisplayed();
    expect(await elementsPage.getDataUnderForm(field).getText()).to.contain(
      data
    );
  }
);

Then(/^I expect to see "(.*)" field becames red$/, async (data) => {
  await elementsPage.getTextBoxField(data).waitForDisplayed();
  expect(
    await elementsPage.getTextBoxField(data).getAttribute("class")
  ).to.contain("error");
});

When(/^I double click on "(.*)" button$/, async (text) => {
  await elementsPage.getButton(text).waitForDisplayed();
  await elementsPage.getButton(text).doubleClick();
});

Then(/^I expect to see "(.*)" message$/, async (text) => {
  await elementsPage.getButtonMessage(text).scrollIntoView();
  await elementsPage.getButtonMessage(text).waitForDisplayed();
  expect(await elementsPage.getButtonMessage(text).isDisplayed()).to.be.equal(
    true
  );
});

When(/^I right click on "(.*)" button$/, async (text) => {
  await elementsPage.getButton(text).waitForDisplayed();
  await elementsPage.getButton(text).click({ button: "right" });
});

When(/^I just click on "(.*)" button$/, async (text) => {
  await elementsPage.getButton(text).waitForDisplayed();
  await elementsPage.getButton(text).click();
});
