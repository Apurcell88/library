const cardContainer = document.querySelector('[data-card-container]');
const readInput = document.querySelector('[data-read]');

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

Book.prototype.toggleRead = function() {
    if (readInput.value.toLowerCase() === 'yes') {
        this.read = 'no';
    } else {
        this.read = 'yes';
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function cancelForm() {
    myLibrary.pop();
}

function removeBook(id) {
    const bookIndex = myLibrary.findIndex((book) => {
        return book.id === id;
    });

    if (bookIndex > -1) {
        myLibrary.splice(bookIndex, 1);
    }
}

function renderBooks(books) {
    cardContainer.innerHTML = '';
    
    books.forEach((book) => {
         generateBooksDom(book) ;
    });
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
    pages.textContent = `${book.pages} pages`;
    card.appendChild(pages);

    const read = document.createElement('p');
    read.textContent = `Have you read this? ${book.read}`
    card.appendChild(read);

    const readOrNotBtn = document.createElement('button');
    readOrNotBtn.textContent = 'Toggle read status';
    readOrNotBtn.classList.add('read-or-not-btn');
    card.appendChild(readOrNotBtn);

    removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');
    card.appendChild(removeBtn); 

    removeBtn.addEventListener('click', (e) => {
        removeBook(book.id);
        renderBooks(myLibrary);
    });

    readOrNotBtn.addEventListener('click', (e) => {
        book.toggleRead();
        renderBooks(myLibrary);
    });

    return card;
}