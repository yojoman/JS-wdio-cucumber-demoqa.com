const { When, Then } = require("@wdio/cucumber-framework");
const { expect, assert } = require("chai");
const bookStorePage = require("../pageobject/book_store.page");

Then(/^I expect to see items on the page$/, async () => {
  await bookStorePage.itemsList.waitForDisplayed();
  expect(await await bookStorePage.itemsList.isDisplayed()).to.equal(true);
});

Then(/^I expect to see "(.*)" book$/, async (text) => {
  await bookStorePage.getBookName(text).waitForDisplayed();
  expect(await bookStorePage.getBookName(text).isDisplayed()).to.equal(true);
});

When(/^I click "(.*)" book$/, async (text) => {
  await bookStorePage.getBookName(text).scrollIntoView();
  await bookStorePage.getBookName(text).waitForDisplayed();
  await bookStorePage.getBookName(text).click();
});

Then(/^I expect ISBN matches defined format$/, async () => {
  const isbnNumber = await bookStorePage.currentPageIsbn.getText();
  expect(await bookStorePage.validatedISBN(isbnNumber)).to.equal(true);
});

When(/^I type "(.*)" in search field$/, async (text) => {
  await bookStorePage.searchField.waitForDisplayed();
  await bookStorePage.searchField.setValue(text);
});

Then(/^I expect to see following books on the page$/, async (table) => {
  const expectedValue = [].concat(...table.rows());
  const actualValue = await bookStorePage.getBookListText();
  assert.sameMembers(expectedValue, actualValue);
});

When(/^I load "(.*)" page$/, async (text) => {
  await bookStorePage.open(text);
});

When(/^I open book (.*)$/, async (book) => {
  await bookStorePage.getBookName(book).scrollIntoView();
  await bookStorePage.getBookName(book).waitForDisplayed();
  await browser.pause(1500);
  await bookStorePage.getBookName(book).click();
});

Then(/^I expect to see book with subtitle (.*)$/, async (subtitle) => {
  await bookStorePage.getBookSubTitle(subtitle).scrollIntoView();
  await bookStorePage.getBookSubTitle(subtitle).waitForDisplayed();
  expect(await bookStorePage.getBookSubTitle(subtitle).isDisplayed()).is.equal(
    true
  );
});

Then(/^I expect to see book with isbn (.*)$/, async (isbn) => {
  await bookStorePage.getBookIsbn(isbn).scrollIntoView();
  await bookStorePage.getBookIsbn(isbn).waitForDisplayed();
  expect(await bookStorePage.getBookIsbn(isbn).isDisplayed()).is.equal(true);
});
