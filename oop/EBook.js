import Book from './Book.js';

export default class EBook extends Book {
    constructor(title, author, year, fileFormat, price){
        super(title, author, year) 
        this._fileFormat = fileFormat;
        this._price = price;
    }

    get fileFormat() {
        return this._fileFormat
    }

    get price() {
        return this._price
    }

    set fileFormat(newFileFormat){
        if (typeof newFileFormat !== "string" || newFileFormat.trim() === ""){
            throw new Error ("The format of publication must be specified.")
        }
        this._fileFormat = newFileFormat;
    }  

    set price(newPrice){
        if (typeof newPrice !== "number"){
            throw new Error ("The price  of the book must be specified.")
        }
        this._price = newPrice;
    }   

static fromBook(book, fileFormat, price = 0) {
    return new EBook(book.title, book.author, book.year, fileFormat, price);
}

    printInfo() {
        console.log(`${this.title} was written by ${this.author} in ${this.year} and available in ${this.fileFormat} for ${this.price}  UAH`)
    }
}

