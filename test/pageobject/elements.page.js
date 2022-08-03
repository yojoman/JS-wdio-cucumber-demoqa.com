const BasePage = require("./base.page");

class ElementsPage extends BasePage {
  getTextBoxField(data) {
    return $(`#${data}`);
  }

  get resultForm() {
    return $(".//div[@id='output']");
  }

  getDataUnderForm(data) {
    return $(`.//p[@id='${data}']`);
  }

  async open(text) {
    return await browser.url(`/${text}`);
  }

  getSubmitButton(text) {
    return $(`.//button[text()='${text}']`);
  }

  getButton(text) {
    return $(`.//button[text()='${text}']`);
  }

  getButtonMessage(text) {
    return $(`.//p[text()='${text}']`);
  }
}

module.exports = new ElementsPage();
