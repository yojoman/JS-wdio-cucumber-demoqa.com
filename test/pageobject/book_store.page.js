const BasePage = require("./base.page");

class BookStorePage extends BasePage {
  get currentPageIsbn() {
    return $(".//div[@id='ISBN-wrapper']/div[2]/label");
  }

  get itemsList() {
    return $(".//div[@class='rt-tbody']");
  }

  get searchField() {
    return $("#searchBox");
  }

  get bookList() {
    return $$("div[class='rt-tbody'] div div div div");
  }

  async open(text) {
    const textLowered = text.toLowerCase();
    return await browser.url(`/${textLowered}`);
  }

  async validatedISBN(number) {
    return /^\d{13}$/i.test(number);
  }

  getBookListText() {
    const elements = this.bookList.map((element) => element.getText());
    return elements;
  }

  getBookName(book) {
    return $(`.//span[contains(@id,"see-book-${book}")]`);
  }

  getBookSubTitle(subtitle) {
    return $(
      `.//div[@id='subtitle-wrapper']/div[2]/label[text()="${subtitle}"]`
    );
  }

  getBookIsbn(isbn) {
    return $(
      `.//div[@id='ISBN-wrapper']/div[2]/label[text()='${isbn}']`
    );
  }

}
module.exports = new BookStorePage();
