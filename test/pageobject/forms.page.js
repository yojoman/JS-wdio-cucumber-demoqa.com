const BasePage = require("./base.page");

class FormsPage extends BasePage {
  get formTitle() {
    return $(".//h5");
  }

  get maleSelected() {
    return $("#gender-radio-1");
  }

  get dateOfBirthInput() {
    return $("#dateOfBirthInput");
  }

  get yearSelectButton() {
    return $(".//select[contains(@class, 'year-select')]");
  }

  get monthSelectButton() {
    return $(".//select[contains(@class, 'month-select')]");
  }

  get sportHobbieInput() {
    return $(".//label[@for='hobbies-checkbox-1']");
  }

  get readingHobbieInput() {
    return $(".//label[@for='hobbies-checkbox-2']");
  }

  get musicHobbieInput() {
    return $(".//label[@for='hobbies-checkbox-3']");
  }

  get selectedSportHobbie() {
    return $("#hobbies-checkbox-1");
  }

  get selectedReadingHobbie() {
    return $("#hobbies-checkbox-2");
  }

  get selectedMusicHobbie() {
    return $("#hobbies-checkbox-3");
  }

  get chooseFileButton() {
    return $("#uploadPicture");
  }

  get submittedForm() {
    return $(".//div[@class='modal-body']");
  }

  getSubmitedFormTitle(title) {
    return $(`.//div[text()='${title}']`);
  }

  getForm(form) {
    return $(`.//div[text()="${form}"]`);
  }

  dayOfBirth(date) {
    return $(`.//div[text()=${date}]`);
  }

  getField(text) {
    return $(`.//input[@placeholder='${text}']`);
  }

  getGenderValue(text) {
    return $(`.//label[text()='${text}']`);
  }
}

module.exports = new FormsPage();
