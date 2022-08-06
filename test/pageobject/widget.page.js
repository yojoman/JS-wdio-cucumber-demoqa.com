const BasePage = require("./base.page");

class WidgetPage extends BasePage {
  getMenuButton(text) {
    return $(`.//a[contains(text(),'${text}')]`);
  }

  getTabContent(tab) {
    const tabLowered = tab.toLowerCase();
    return $(`.//div[contains(@id, '${tabLowered}')]`);
  }
  getTab(text) {
    return $(`.//a[text()="${text}"]`);
  }
}

module.exports = new WidgetPage();
