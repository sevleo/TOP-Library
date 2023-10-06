// Global variables
const myLibrary = [];

// Execution
createTestData();
loadBooks();
addModalDialogEventListeners();

// Book constructor
function Book(title, author, has_read, displayed) {
    this.title = title;
    this.author = author;
    this.has_read = has_read;
    this.displayed = displayed;
}

// Display updated books' library
function loadBooks() {
    const bookList = document.querySelector('.book-list');
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        if (book.displayed === false) {
            book.displayed = true;

            // Update DOM
            const bookItem = document.createElement("div");
            bookItem.classList.add('book');

            const bookItemTitle = document.createElement("p");
            bookItemTitle.textContent = `Title: ${book.title}`;
            bookItem.append(bookItemTitle);

            const bookItemAuthor = document.createElement("p");
            bookItemAuthor.textContent = `Author: ${book.author}`;
            bookItem.append(bookItemAuthor);

            const bookItemHasRead = document.createElement("p");
            bookItemHasRead.textContent = `Has been read: ${book.has_read}`;
            bookItem.append(bookItemHasRead);

            bookList.append(bookItem);
        }
    }
}

// Define event listeners around modal dialog window
function addModalDialogEventListeners() {
    const dialog = document.querySelector("dialog");
    const openDialogButton = document.querySelector('.add-book > button.dialog');
    const closeDialogButton = document.querySelector('dialog.add-book > form > button.close');
    const form = document.querySelector("dialog > form");
    
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
}

// Add new book to library
function addBookToLibrary(book) {
    myLibrary.push(book);
    loadBooks();
}

// Collect book properties from DOM and create object
function createBookObject() {
    const bookTitle = document.querySelector("dialog.add-book > form input#title");
    const bookAuthor = document.querySelector("dialog.add-book > form input#author");
    const bookRead = document.querySelector("dialog.add-book > form input#read");
    const book = new Book(bookTitle.value, bookAuthor.value, bookRead.checked, false);
    return book;
}

// Test stuff
function createTestData() {
    const book1 = new Book("The Hobbit", "J.R.R. Tolkien", false, false);
    const book2 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", true, false);
    const book3 = new Book("Meditations", "Marcus Aurelius", true, false);
    myLibrary.push(book1);
    myLibrary.push(book2);
    myLibrary.push(book3);
}