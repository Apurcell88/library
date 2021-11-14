import { v4 as uuidv4 } from 'uuid';
console.log(uuidv4());

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

function cancelForm() {
    myLibrary.pop();
}

function generateBooksDom(book) {
    const card = document.createElement('div');
    card.classList.add('card');
    cardContainer.appendChild(card);

    const title = document.createElement('h2');
    title.textContent = book.title;
    card.appendChild(title);

    const author = document.createElement('h3');
    author.textContent = book.author;
    card.appendChild(author);

    const pages = document.createElement('p');
    pages.textContent = book.pages;
    card.appendChild(pages);

    const readOrNotBtn = document.createElement('button');
    readOrNotBtn.textContent = book.read;
    readOrNotBtn.classList.add('read-or-not-btn');
    card.appendChild(readOrNotBtn);

    removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');
    card.appendChild(removeBtn);

    removeBtn.addEventListener('click', (e) => {

    });

    return card;
}

function renderBooks() {
    myLibrary.forEach((book) => {
        cardContainer.appendChild(generateBooksDom(book));
    });
    
}

function removeBook() {

}

const container = document.querySelector('.container');
const header = document.querySelector('header');
const addBookBtn = document.querySelector('[data-add-book-btn]');
const cardContainer = document.querySelector('[data-card-container]');
const formContainer = document.querySelector('[data-form-container]');
const addContainer = document.querySelector('[data-add-container]');
const form = document.querySelector('form');
const title = document.querySelector('[data-title]');
const author = document.querySelector('[data-author]');
const pages = document.querySelector('[data-total-pages]');
const checkbox = document.querySelector('[data-read]');
const cancel = document.querySelector('[data-cancel]');
const add = document.querySelector('[data-add]');

addBookBtn.addEventListener('click', (e) => {
    header.classList.remove('show');
    header.classList.add('hide');

    addContainer.classList.remove('show');
    addContainer.classList.add('hide');

    cardContainer.classList.remove('show');
    cardContainer.classList.add('hide');

    formContainer.classList.add('show');
});

cancel.addEventListener('click', (e) => {
    cancelForm();

    header.classList.remove('hide');
    header.classList.add('show');

    addContainer.classList.remove('hide');
    addContainer.classList.add('show');

    cardContainer.classList.remove('hide');
    cardContainer.classList.add('show');

    formContainer.classList.remove('show');
    formContainer.classList.add('hide');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    cardContainer.innerHTML = '';

    const book = new Book(title.value, author.value, pages.value, true);
    
    addBookToLibrary(book);
    generateBooksDom(myLibrary);
    renderBooks();
    
    header.classList.remove('hide');
    header.classList.add('show');

    addContainer.classList.remove('hide');
    addContainer.classList.add('show');

    cardContainer.classList.remove('hide');
    cardContainer.classList.add('show');

    formContainer.classList.remove('show');
    formContainer.classList.add('hide');
});

// const hisBook = new Book('It', 'Stephen King', 1036, 'Yes');
// const myBook = new Book('Gone With The Wind', 'Margaret Mitchell', 1024, 'No');


// addBookToLibrary(hisBook);
// addBookToLibrary(myBook);

// createBooksDom(myLibrary);