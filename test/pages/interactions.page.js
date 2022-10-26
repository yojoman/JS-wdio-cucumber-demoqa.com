const BasePage = require("./base.page");

class InteractionsPage extends BasePage {
  getElementFromList(text) {
    return $(`.//div[@id="demo-tabpane-list"]/div/div[text()="${text}"]`);
  }

  getElementPlaceFromList(number) {
    return $(`.//div[@id="demo-tabpane-list"]/div/div[${number}]`);
  }

  getElementFromGrid(text) {
    return $(`.//div[@id='demo-tabpane-grid']/div/div/div[text()="${text}"]`);
  }

  getElementPlaceFromGrid(number) {
    return $(`.//div[@id="demo-tabpane-grid"]/div/div/div[${number}]`);
  }
}

module.exports = new InteractionsPage();
