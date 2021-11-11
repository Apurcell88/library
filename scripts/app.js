let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function loopArray(books) {
    books.forEach((book) => {
        // const bookContainer = document.createElement('div');
        // container.appendChild(bookContainer);
        // bookContainer.classList.add('margin-top');

        // const h2 = document.createElement('h2');
        // h2.textContent = book.title;
        // bookContainer.appendChild(h2);

        // const h3 = document.createElement('h3');
        // h3.textContent = book.author;
        // bookContainer.appendChild(h3);

        // const pages = document.createElement('p');
        // pages.textContent = book.pages + ' pages';
        // bookContainer.appendChild(pages);

        // const readOrNot = document.createElement('p');
        // readOrNot.textContent = book.read;
        // bookContainer.appendChild(readOrNot);
    });
}

const container = document.querySelector('.container');
const addBookBtn = document.querySelector('[data-add-book]');

myBook = new Book('It', 'Stephen King', 1138, 'Yes');
hisBook = new Book('Gone With The Wind', 'Margaret Mitchell', 1024, 'No');

addBookToLibrary(hisBook);
addBookToLibrary(myBook);

console.log(myLibrary);

loopArray(myLibrary);