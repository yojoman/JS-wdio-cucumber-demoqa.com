const { Before, Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const homePage = require("../pages/home.page");

Before(/^Mazimize browser window$/, async () => {
  await browser.maximizeWindow();
});

Given(/^I am on the home page$/, async () => {
  await homePage.open();
  await homePage.mainLogo.waitForDisplayed();
});

Then(/^I expect to see website logo image$/, async () => {
  expect(await homePage.mainLogo.isDisplayed()).to.equal(true);
});

Then(/^I expect to see Selenium training image$/, async () => {
  await homePage.seleniumTrainingLogo.waitForDisplayed();
  expect(await homePage.seleniumTrainingLogo.isDisplayed()).to.equal(true);
});

Then(/^I expect to see "(.*)" footer text$/, async (text) => {
  await homePage.getFooterText(text).waitForDisplayed();
  expect(await homePage.getFooterText(text).isDisplayed()).to.equal(true);
});

Then(/^I expect to see "(.*)" title$/, async (title) => {
  expect(await browser.getTitle()).to.equal(title);
});

When(/^I press website logo$/, async () => {
  await homePage.mainLogo.waitForDisplayed();
  await homePage.mainLogo.click();
});

Then(/^I expect to be returned on main page$/, async () => {
  await homePage.mainLogo.waitForDisplayed();
  expect(await homePage.mainLogo.isDisplayed()).to.equal(true);
});

When(/^I press Selenium logo$/, async () => {
  await homePage.seleniumTrainingLogo.waitForDisplayed();
  await homePage.seleniumTrainingLogo.click();
});

Then(/^I expect to be on Selenium page with "(.*)" title$/, async (title) => {
  await browser.switchWindow("https://www.toolsqa.com/selenium-training/");
  expect(await browser.getTitle()).to.equal(title);
});

When(/^I click on (.*) button$/, async (text) => {
  await homePage.getButton(text).scrollIntoView();
  await homePage.getButton(text).click();
  await browser.pause(1000);
});

Then(/^I expect to be on page with (.*) title$/, async (title) => {
  await homePage.getTitle(title).scrollIntoView();
  expect(await homePage.getTitle(title).isDisplayed()).to.equal(true);
});
