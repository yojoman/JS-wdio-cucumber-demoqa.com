const BasePage = require("./base.page");

class HomePage extends BasePage {
  get mainLogo() {
    return $("img[src='/images/Toolsqa.jpg']");
  }

  get seleniumTrainingLogo() {
    return $("img[alt='Selenium Online Training']");
  }

  get seleniumTrainigRegistrationButton() {
    return $(".//a[text()='Go To Registration ']");
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
}

module.exports = new HomePage();
