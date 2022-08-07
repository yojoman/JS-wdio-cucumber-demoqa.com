const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const bookStorePage = require("../pageobject/book_store.page");

When(/^I click "(.*)" book$/, async (book) => {
  await bookStorePage.getBookName(book).scrollIntoView();
  await bookStorePage.getBookName(book).click();
  // console.log($$("div[class='rt-tbody'] div div div div").getText());
});

Then(/^I expect ISBN matches defined format$/, async () => {
  const isbnNumber = await bookStorePage.currentPageIsbn.getText();
  expect(await bookStorePage.validatedISBN(isbnNumber)).to.equal(true);
});

When(/^I back on previous page$/, async () => {
  await browser.back();
});

Then(/^I expect to see all books on the page$/, async () => {
  const booksList = bookStorePage.getBookListText();
  expect(booksList).to.deep.equal([
    "Git Pocket Guide",
    "Learning JavaScript Design Patterns",
    "Designing Evolvable Web APIs with ASP.NET",
    "Speaking JavaScript",
    "You Don't Know JS",
    "Programming JavaScript Applications",
    "Eloquent JavaScript, Second Edition",
    "Understanding ECMAScript 6",
  ]);
});

When(/^I open (.*)$/, async (book) => {
  await bookStorePage.getBookName(book).waitForDisplayed({ timeout: 10000 });
  //await bookStorePage.getBookName2(book).scrollIntoView();
  await bookStorePage.getBookName2(book).click();
  await browser.pause(1000);
});

Then(/^I expect1 to see (.*)$/, async (subtitle) => {
  await bookStorePage.getBookISubTitle(subtitle).scrollIntoView();
  expect(
    await bookStorePage.getBookISubTitle(subtitle).isDisplayed()
  ).to.be.equal(true);
  //await browser.pause(1000);
});

Then(/^I expect2 to see (.*)$/, async (number) => {
  await bookStorePage.getBookISBN(number).scrollIntoView();
  expect(await bookStorePage.getBookISBN(number).isDisplayed()).to.be.equal(
    true
  );
  //await browser.pause(1000);
});
