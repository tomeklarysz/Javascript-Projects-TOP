
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    let msg = "";
    if (this.read) {
      msg = "already read";
    } else {
      msg = "not read yet";
    }
    return `${this.title} by ${this.author}, ${pages} pages, ${msg}`;
  };
}

function addBookToLibrary() {
  
}