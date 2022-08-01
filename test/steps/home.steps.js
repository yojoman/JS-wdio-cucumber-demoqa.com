const { Before, Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const homePage = require("../pageobject/home.page");

Before(/^Mazimize browser window$/, async () => {
  await browser.maximizeWindow();
});

Given(/^I am on the home page$/, async () => {
  await homePage.open();
  await homePage.mainLogo.waitForDisplayed();
});

Then(/^I can see logo image$/, async () => {
  expect(await homePage.mainLogo.isDisplayed()).to.equal(true);
});

Then(/^I can see Selenium training image$/, async () => {
  await homePage.seleniumTrainingLogo.waitForDisplayed();
  expect(await homePage.seleniumTrainingLogo.isDisplayed()).to.equal(true);
});

Then(/^I can see "(.*)" footer text$/, async (text) => {
  await homePage.footerText(text).waitForDisplayed();
  expect(await homePage.footerText(text).isDisplayed()).to.equal(true);
});

Then(/^I can see "(.*)" title$/, async (title) => {
  expect(await browser.getTitle()).to.equal(title);
});

When(/^I press site logo$/, async () => {
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
  await homePage.seleniumTrainigRegistrationButton.waitForDisplayed();
  expect(await browser.getTitle()).to.equal(title);
});

When(/^I click on (.*)$/, async (text) => {
  await homePage.button(text).scrollIntoView();
  await homePage.button(text).click();
  await browser.pause(1000);
});

Then(/^I expect be on page with (.*)$/, async (title) => {
  await homePage.title(title).scrollIntoView();
  expect(await homePage.title(title).isDisplayed()).to.equal(true);
});
