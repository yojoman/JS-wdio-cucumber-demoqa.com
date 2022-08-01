const BasePage = require("./base.page");

class ElementsPage extends BasePage {
  get fullNameField() {
    return $("#userName");
  }

  get emailField() {
    return $("#userEmail");
  }

  get currentAddressField() {
    return $("#currentAddress");
  }

  get permanentAddressField() {
    return $("#permanentAddress");
  }

  get resultForm() {
    return $(".//div[@id='output']");
  }
  get nameUnderForm() {
    return $(".//p[@id='name']");
  }

  get emailUnderForm() {
    return $(".//p[@id='email']");
  }

  get currentAddressUnderForm() {
    return $(".//p[@id='currentAddress']");
  }

  get permanentAddressUnderForm() {
    return $(".//p[@id='permanentAddress']");
  }

  async open() {
    return await browser.url("/text-box");
  }

  submitButton(text) {
    return $(`.//button[text()='${text}']`);
  }

  title(title) {
    return $(`.//div[@class="main-header"][text()="${title}"]`);
  }
}

module.exports = new ElementsPage();
