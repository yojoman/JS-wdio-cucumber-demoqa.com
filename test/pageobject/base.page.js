module.exports = class BasePage {
  async open(text) {
    const textLowered = text.toLowerCase();
    return await browser.url(`/${textLowered}`);
  }
};
