class Book {
    title;
    author;
    pages;
    isAvailable = true;

    constructor(title, author, pages, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = isAvailable;
    }

    borrow() {
        this.isAvailable = false;
    }

    returnBook() {
        this.isAvailable = true;
    }

    getInfo() {
        return `${this.title} by ${this.author} (${this.pages} pages)`;
    }

    isLongBook() {
        return this.pages > 300;
    }
}
