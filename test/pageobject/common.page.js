const BasePage = require("./base.page");

class CommonPage extends BasePage {
  get advertisement(){
    return $(".//div[@id='Ad.Plus-728x90']")
  }
  
  getSubmitButton(text) {
    return $(`.//button[text()='${text}']`);
  }

  getTextBoxField(data) {
    return $(`#${data}`);
  }

  getTab(text) {
    return $(`.//a[text()="${text}"]`);
  }
}

module.exports = new CommonPage();
