const container = document.querySelector('.container');


let myLibrary = [];

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

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(new Book("Dżuma", "Albert Cameux", 250, true));
addBookToLibrary(new Book("Zbrodnia i Kara", "Fiodor Dostoyevsky", 300, true));
addBookToLibrary(new Book("Przemiana", "Franz Kafka", 100, false));

const displayBooks = () => {
  const books = document.querySelector('.books');
  books.replaceChildren();
  for (const book of myLibrary) {
    const bookDiv = document.createElement('div');
    bookDiv.setAttribute('class', 'book'); 
    
    const title = document.createElement('p');
    title.innerText = book.title;
    const author = document.createElement('p');
    author.innerText = book.author;
    const pages = document.createElement('p');
    pages.innerText = book.pages;
    const read = document.createElement('p');
    read.innerText = book.read ? "Read" : "Not Read";
    
    bookDiv.appendChild(title);
    bookDiv.appendChild(author);
    bookDiv.appendChild(pages);
    bookDiv.appendChild(read);
    
    books.appendChild(bookDiv);
  }
  container.appendChild(books);

}
displayBooks();

const newBookBtn = document.getElementById('new-book');
const dialog = document.getElementById('dialog');
const submitBtn = document.getElementById('submit');

newBookBtn.addEventListener('click', () => {
  dialog.showModal();
});

submitBtn.addEventListener('click', (e) => {
  
  e.preventDefault();
  getNewBook();
  dialog.close();
  displayBooks();
});

const getNewBook = () => {

  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  const read = document.getElementById('read');

  addBookToLibrary(new Book(
    title.value,
    author.value,
    pages.value,
    read.checked
  ));

  title.value = '';
  author.value = '';
  pages.value = '';
  read.checked = false;
};
