const container = document.querySelector('.container');

let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info() {
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
  let indexCounter = 0;
  for (const book of myLibrary) {
    const bookDiv = document.createElement('div');
    bookDiv.setAttribute('class', 'book'); 
    bookDiv.setAttribute('data-index', `${indexCounter}`)
    
    const title = document.createElement('p');
    title.innerText = book.title;
    const author = document.createElement('p');
    author.innerText = book.author;
    const pages = document.createElement('p');
    pages.innerText = book.pages;
    const read = document.createElement('p');
    read.innerText = book.read ? "Read" : "Not Read";

    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    readBtn.innerText = "Toggle read status";
    removeBtn.innerText = "Remove Book";
    
    removeBtn.addEventListener('click', () => {
      index = bookDiv.dataset.index;
      const x = myLibrary.splice(index, 1);
      displayBooks();
    });

    readBtn.addEventListener('click', () => {
      if (book.read) {
        book.read = false;
      } else {
        book.read = true;
      }
      displayBooks();
    });

    bookDiv.appendChild(title);
    bookDiv.appendChild(author);
    bookDiv.appendChild(pages);
    bookDiv.appendChild(read);
    
    const btnDiv = document.createElement('div');
    btnDiv.setAttribute('class', 'buttons');
    btnDiv.appendChild(readBtn);
    btnDiv.appendChild(removeBtn);
    bookDiv.appendChild(btnDiv);
    
    books.appendChild(bookDiv);
    indexCounter++;
  }
  container.appendChild(books);

}
displayBooks();

const newBookBtn = document.getElementById('new-book');
const dialog = document.getElementById('dialog');
const submitBtn = document.getElementById('submit');
const form = document.querySelector('form');

newBookBtn.addEventListener('click', () => {
  dialog.showModal();
});

submitBtn.addEventListener('click', () => {
  if (form.checkValidity()) {
    getNewBook();
    dialog.close();
    displayBooks();
  }
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