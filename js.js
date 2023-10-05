const myLibrary = [];

function Book(title, author, num_of_pages, has_read) {
    this.title = title;
    this.author = author;
    this.num_of_pages = num_of_pages;
    this.has_read = has_read;
    this.show_title = () => {
        const read_status = this.has_read ? "has been read" : "has not read yet";
        return (`${this.title} by ${this.author}, ${this.num_of_pages} pages, ${read_status}.`);
    }
}

function addBookToLibrary() {
    // do stuff here
}


const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
const book2 = new Book('Harry Potter', 'J. Rowling', 451, false);