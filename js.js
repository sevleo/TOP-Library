// To store book instances
const myLibrary = [];

// Test data
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", false);
const book2 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", true);
const book3 = new Book("Meditations", "Marcus Aurelius", true);
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

// Book constructor
function Book(title, author, has_read) {
    this.title = title;
    this.author = author;
    this.has_read = has_read;
    this.displayed = false;
}

// Called on submit button in dialog
function addBookToLibrary(book) {
    myLibrary.push(book);
    loadBooks();
}


function loadBooks() {
    const oldBookList = document.querySelectorAll('.book');
    oldBookList.forEach(bookNode => {
        bookNode.remove();
    });

    const bookList = document.querySelector('.book-list');
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];

        const bookItem = document.createElement("div");
        bookItem.classList.add('book');
    
        const bookItemTitle = document.createElement("p");
        bookItemTitle.textContent = `Title: ${book.title}`;
    
        const bookItemAuthor = document.createElement("p");
        bookItemAuthor.textContent = `Author: ${book.author}`;
    
        const bookItemHasRead = document.createElement("p");
        bookItemHasRead.textContent = `Has been read: ${book.has_read}`;
    
        bookItem.append(bookItemTitle);
        bookItem.append(bookItemAuthor);
        bookItem.append(bookItemHasRead);

        bookList.append(bookItem);
    }
}


loadBooks();


const dialog = document.querySelector("dialog");
const openDialogButton = document.querySelector('.add-book > button.dialog');
const closeDialogButton = document.querySelector('dialog.add-book > form > button.close');
const form = document.querySelector("dialog > form");
const submitDialogButton = document.querySelector('dialog.add-book > form > button.submit');


openDialogButton.addEventListener("click", () => {
    dialog.showModal();
});


closeDialogButton.addEventListener("click", (event) => {
    event.preventDefault();
    form.reset();
    dialog.close();
});


form.addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary(createBookObject());
    form.reset();
    dialog.close();
});

// Collect book properties from DOM and create object
function createBookObject() {
    const bookTitle = document.querySelector("dialog.add-book > form input#title");
    const bookAuthor = document.querySelector("dialog.add-book > form input#author");
    const bookRead = document.querySelector("dialog.add-book > form input#read");
    const book = new Book(bookTitle.value, bookAuthor.value, bookRead.checked);
    return book;
}