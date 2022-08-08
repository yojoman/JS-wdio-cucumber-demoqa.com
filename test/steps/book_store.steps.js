const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const bookStorePage = require("../pageobject/book_store.page");

When(/^I click "(.*)" book$/, async (book) => {
  await bookStorePage.getBookName(book).scrollIntoView();
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
  await browser.pause(3000);
});

// Then(/^I expect to see following books in search results$/, async () => {});


// When(/^I back on previous page$/, async () => {
//   await browser.back();
// });

// Then(/^I expect to see all books on the page$/, async () => {
//   const booksList = bookStorePage.getBookListText();
//   expect(booksList).to.deep.equal([
//     "Git Pocket Guide",
//     "Learning JavaScript Design Patterns",
//     "Designing Evolvable Web APIs with ASP.NET",
//     "Speaking JavaScript",
//     "You Don't Know JS",
//     "Programming JavaScript Applications",
//     "Eloquent JavaScript, Second Edition",
//     "Understanding ECMAScript 6",
//   ]);
// });


When(/^I open (.*)$/, async (book) => {
  await bookStorePage.getBookName(book).scrollIntoView();
  await bookStorePage.getBookName(book).click();
});

Then(/^I expect to see book with (.*)$/, async (subtitle) => {
  await bookStorePage.getBookISubTitle(subtitle).scrollIntoView();
  expect(
    await bookStorePage.getBookISubTitle(subtitle).isDisplayed()
  ).is.equal(true);
});
