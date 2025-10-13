import Book from "./Book.js";
import EBook from "./EBook.js";

const book1 = new EBook(
  "Kobzar",
  "Taras Shevchenko",
  1840,
  "PDF",
  550,
);
const book2 = new EBook(
  "Scrum",
  "Jeff Sutherland",
  2022,
  "text",
  330,
);
const book3 = new EBook(
  "Not my story",
  "Katerina Kuznetsova",
  2025,
  "PDF",
  250,
);
const book4 = new Book(
  "The Witcher",
  "Andrzej Sapkowski",
  2016,
);

book1.printInfo();
book2.printInfo();
book3.printInfo();

const allBooks = [book1, book2, book3, book4];
const oldest = Book.findOldestBook(allBooks);
console.log("The oldest book:");
oldest.printInfo();

const ebookFromBook = EBook.fromBook(
  book4,
  "PNG",
  450,
);
console.log("Electronic version and price:");
ebookFromBook.printInfo();
