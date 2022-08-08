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

  async validatedISBN(number) {
    return /^\d{13}$/i.test(number);
  }

  get bookList() {
    return $$("div[class='rt-tbody'] div div div div");
  }

  // async getBookListText() {
  //   const result = await Promise.all(
  //     await this.bookList.map(async (element) => {
  //       return await element.getText();
  //     })
  //   );
  // }

  getBookListText() {
    const booksListArr = [];
    this.bookList.map((element) => booksListArr.push(element.getText()));
    return booksListArr;
  }

  getBookName(book) {
    return $(`.//span[contains(@id,"see-book-${book}")]`);
  }

  getBookISBN(number) {
    return $(`.//div[@id='ISBN-wrapper']/div[2]/label[text()="${number}"]`);
    //return $(`.//label[text()="${number}"]`);
  }

  getBookISubTitle(subtitle) {
    return $(
      `.//div[@id='subtitle-wrapper']/div[2]/label[text()="${subtitle}"]`
    );
    //return $(`.//label[text()="${subtitle}"]`);
  }
}
module.exports = new BookStorePage();
