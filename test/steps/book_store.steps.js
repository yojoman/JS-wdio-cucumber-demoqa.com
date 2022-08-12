const { When, Then } = require("@wdio/cucumber-framework");
const { expect, assert } = require("chai");
const bookStorePage = require("../pageobject/book_store.page");

When(/^I click "(.*)" book$/, async (book) => {
  await bookStorePage.getBookName(book).scrollIntoView();
  await bookStorePage.getBookName(book).waitForDisplayed();
  await bookStorePage.getBookName(book).click();
});

Then(/^I expect ISBN matches defined format$/, async () => {
  const isbnNumber = await bookStorePage.currentPageIsbn.getText();
  expect(await bookStorePage.validatedISBN(isbnNumber)).to.equal(true);
});

Then(/^I expect to see items on the page$/, async () => {
  await bookStorePage.itemsList.waitForDisplayed();
  expect(await await bookStorePage.itemsList.isDisplayed()).to.equal(true);
});

When(/^I type "(.*)" in search field$/, async (text) => {
  await bookStorePage.searchField.waitForDisplayed();
  await bookStorePage.searchField.setValue(text);
});

Then(/^I expect to see following books in search results$/, async (table) => {
  const expectedValue = [].concat(...table.rows());
  const actualValue = await bookStorePage.getBookListText();
  assert.sameMembers(expectedValue, actualValue);
});

When(/^I load "(.*)" page$/, async (text) => {
  await bookStorePage.open(text);
});

When(/^I open (.*)$/, async (book) => {
  await bookStorePage.getBookName(book).scrollIntoView();
  await bookStorePage.getBookName(book).waitForDisplayed();
  await browser.pause(1500);
  await bookStorePage.getBookName(book).click();
});

Then(/^I expect to see book with (.*)$/, async (subtitle) => {
  await bookStorePage.getBookISubTitle(subtitle).scrollIntoView();
  await bookStorePage.getBookISubTitle(subtitle).waitForDisplayed();
  expect(await bookStorePage.getBookISubTitle(subtitle).isDisplayed()).is.equal(
    true
  );
});
