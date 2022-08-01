module.exports = class BasePage {
  async open() {
    return await browser.url("/");
  }
};
