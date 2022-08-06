const BasePage = require("./base.page");

class WindowsPage extends BasePage {
  get allertsText() {
    return $(".//body");
  }

  get bodyOfModalWindow() {
    return $(".//div[@class='modal-body']");
  }

  getModalTitle(text) {
    return $(`.//div[text()='${text}']`);
  }

  getNewTabeTitle(text) {
    return $(`.//h1[text()='${text}']`);
  }

  getButton(text) {
    return $(`.//button[text()='${text}']`);
  }
}

module.exports = new WindowsPage();
