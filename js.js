const myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        has_read: false,
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        has_read: true,
    },
    {
        title: "Meditations",
        author: "Marcus Aurelius",
        has_read: false,
    },
];

function Book(title, author, has_read) {
    this.title = title;
    this.author = author;
    this.has_read = has_read;
    this.show_title = () => {
        const read_status = this.has_read ? "has been read" : "has not read yet";
        return (`${this.title} by ${this.author}, ${this.num_of_pages} pages, ${read_status}.`);
    }
}


function addBookToLibrary() {
    const book = new Book('Test Title', 'Test Author', false)
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