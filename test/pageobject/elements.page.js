const BasePage = require("./base.page");

class ElementsPage extends BasePage {
  get resultForm() {
    return $(".//div[@id='output']");
  }

  async open(text) {
    return await browser.url(`/${text}`);
  }

  getTextBoxField(data) {
    return $(`#${data}`);
  }

  getDataUnderForm(data) {
    return $(`.//p[@id='${data}']`);
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
