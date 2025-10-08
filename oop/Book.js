export default class Book {
    constructor(title, author, year){
        this._title = title;
        this._author = author;
        this._year = year;
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

     get year() {
        return this._year;
    }

    set title(newTitle){
        if (typeof newTitle !== "string" || newTitle.trim() === ""){
            throw new Error ("The title of the book cannot be empty.")
        }
        this._title = newTitle;
    }

    set author(newAuthor){
        if (typeof newAuthor !== "string" || newAuthor.trim() === ""){
            throw new Error ("The author of the book must be specified.")
        }
        this._author = newAuthor;
    }

    set year(newYear){
        if (typeof newYear !== "number"){
            throw new Error ("The year of publication must be specified.")
        }
        this._year = newYear;
    }

static findOldestBook(booksArray) {
    return booksArray.reduce((oldest, current) => {
        return oldest.year < current.year ? oldest : current;
    });
}

    printInfo() {
        console.log(`${this.title} was written by ${this.author} in ${this.year}`);
    }
}

