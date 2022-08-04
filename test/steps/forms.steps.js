const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const formsPage = require("../pageobject/forms.page");

Then(/^I expect to see Student Registration Form$/, async () => {
  expect(await formsPage.formTitle.isDisplayed()).to.be.equal(true);
});

When(/^I type "(.*)" in "(.*)" field$/, async (data, field) => {
  await formsPage.getField(field).waitForDisplayed();
  await formsPage.getField(field).setValue(data);
});

Then(/^I expect to see "(.*)" text in "(.*)" field$/, async (data, field) => {
  expect(await formsPage.getField(field).getValue()).to.equal(data);
});

When(/^I select "(.*)" gender$/, async (text) => {
  await formsPage.getGenderValue(text).waitForDisplayed();
  await formsPage.getGenderValue(text).click();
});

Then(/^I expect to see selected Male gender$/, async () => {
  expect(await formsPage.maleSelected.isSelected()).to.be.equal(true);
});

When(
  /^I select "(.*)" year, "(.*)" month and "(.*)" date in Date of Birt field$/,
  async (year, month, date) => {
    await formsPage.dateOfBirthInput.click();
    await formsPage.yearSelectButton.selectByAttribute("value", year);
    await formsPage.monthSelectButton.selectByVisibleText(month);
    await formsPage.dayOfBirth(date).click();
  }
);

Then(/^I expect to see "(.*)" de in Date of Birt field$/, async (date) => {
  expect(await formsPage.dateOfBirthInput.getValue()).to.equal(date);
});

When(/^I select Sports, Reading and Music hobbies$/, async () => {
  await formsPage.sportHobbieInput.click();
  await formsPage.readingHobbieInput.click();
  await formsPage.musicHobbieInput.click();
});

Then(
  /^I expect to see Sports, Reading and Music hobbies are selected$/,
  async () => {
    expect(await formsPage.selectedSportHobbie.isSelected()).to.be.equal(true);
    expect(await formsPage.selectedReadingHobbie.isSelected()).to.be.equal(
      true
    );
    expect(await formsPage.selectedMusicHobbie.isSelected()).to.be.equal(true);
  }
);

When(/^I choose and upload picture$/, async () => {
  const filePath = await browser.uploadFile("test/resources/js_logo.png");
  await formsPage.chooseFileButton.setValue(filePath);
});

When(/^I push Submit button$/, async () => {
  await browser.keys("Tab");
  await browser.keys("Tab");
  await browser.keys("Enter");
});

Then(
  /^I expect to see window with "(.*)" title contains submitted form$/,
  async (title) => {
    await formsPage.submittedForm.waitForDisplayed();
    expect(await formsPage.submittedForm.isDisplayed()).to.be.equal(true);
    expect(await formsPage.getSubmitedFormTitle(title).isDisplayed()).to.equal(
      true
    );
  }
);

Then(/^I expect the see the window has disappeared$/, async () => {
  await formsPage.submittedForm.waitForDisplayed({ reverse: true });
  expect(await formsPage.submittedForm.isDisplayed()).to.equal(false);
});
