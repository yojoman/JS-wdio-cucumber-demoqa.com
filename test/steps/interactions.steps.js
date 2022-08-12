const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const interactionsPage = require("../pageobject/interactions.page");

When(/^I drag and drop "(.*)" item to 3 slot$/, async (text) => {
  await interactionsPage.getElementFromList(text).waitForDisplayed();
  await browser.pause(1500);
  await interactionsPage.getElementFromList(text).dragAndDrop({ x: 0, y: 100 });
});

Then(
  /^I expect to see "(.*)" item in "(.*)" List slot$/,
  async (text, number) => {
    await interactionsPage.getElementPlaceFromList(number).waitForDisplayed();
    expect(
      await interactionsPage.getElementPlaceFromList(number).getText()
    ).to.be.equal(text);
  }
);

When(/^I drag and drop "(.*)" item at the bottom$/, async (text) => {
  await interactionsPage.getElementFromGrid(text).waitForDisplayed();
  await browser.pause(1500);
  await interactionsPage.getElementFromGrid(text).dragAndDrop({ x: 0, y: 200 });
});

Then(
  /^I expect to see "(.*)" item in "(.*)" Grid slot$/,
  async (text, number) => {
    await interactionsPage.getElementPlaceFromGrid(number).waitForDisplayed();
    expect(
      await interactionsPage.getElementPlaceFromGrid(number).getText()
    ).to.be.equal(text);
  }
);
