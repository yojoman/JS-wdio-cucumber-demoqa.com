const BasePage = require("./base.page");

class HomePage extends BasePage {
  get mainLogo() {
    return $("img[src='/images/Toolsqa.jpg']");
  }

  get seleniumTrainingLogo() {
    return $("img[alt='Selenium Online Training']");
  }

  getFooterText(text) {
    return $(`.//span[text()='${text}']`);
  }

  getButton(text) {
    return $(`.//h5[text()='${text}']`);
  }

  getTitle(title) {
    return $(`.//div[@class="main-header"][text()="${title}"]`);
  }

  async open() {
    return await browser.url("/");
  }
}

module.exports = new HomePage();
