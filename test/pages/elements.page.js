const BasePage = require("./base.page");

class ElementsPage extends BasePage {
  get resultForm() {
    return $(".//div[@id='output']");
  }

  getTextBoxField(data) {
    return $(`#${data}`);
  }

  getDataUnderForm(data) {
    return $(`.//p[@id='${data}']`);
  }

  getButton(text) {
    return $(`.//button[text()='${text}']`);
  }

  getButtonMessage(text) {
    return $(`.//p[text()='${text}']`);
  }
}

module.exports = new ElementsPage();
