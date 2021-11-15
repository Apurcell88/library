let myLibrary = [];

renderBooks(myLibrary);

// cardContainer is in the functions file since one of the functions uses it
const container = document.querySelector('.container');
const header = document.querySelector('header');
const addBookBtn = document.querySelector('[data-add-book-btn]');
const formContainer = document.querySelector('[data-form-container]');
const addContainer = document.querySelector('[data-add-container]');
const form = document.querySelector('form');
const title = document.querySelector('[data-title]');
const author = document.querySelector('[data-author]');
const pages = document.querySelector('[data-total-pages]');
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

    title.value = '';
    author.value = '';
    pages.value = '';
    readInput.value = '';
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

    const book = new Book(title.value, author.value, pages.value, readInput.value, uuidv4());
    
    addBookToLibrary(book);
    renderBooks(myLibrary);
    
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
// const myBook = new Book('Gone With The Wind', 'Margaret Mitchell', 1024, false, uuidv4());

// console.log(myBook);


// addBookToLibrary(hisBook);
// addBookToLibrary(myBook);

// createBooksDom(myLibrary);