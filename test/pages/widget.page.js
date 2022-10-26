const BasePage = require("./base.page");

class WidgetPage extends BasePage {
  getMenuButton(text) {
    return $(`.//a[contains(text(),'${text}')]`);
  }

  getSubItemButton(text) {
    return $$(`.//a[contains(text(),'${text}')]`)[0];
  }

  getTab(text) {
    return $(`.//a[text()="${text}"]`);
  }

  getTabContent(tab) {
    const tabLowered = tab.toLowerCase();
    return $(`.//div[contains(@id, '${tabLowered}')]`);
  }
}

module.exports = new WidgetPage();
