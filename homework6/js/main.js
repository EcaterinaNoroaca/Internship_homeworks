import {book1,book2,book3,book4,book5,booklist} from './obj_created.js';

booklist.add(book1);
booklist.add(book2);
booklist.add(book3);
booklist.add(book4);
booklist.add(book5);
booklist.finishCurrentBook();
booklist.finishCurrentBook();
booklist.finishCurrentBook();

console.log("Number of read books : ".concat(booklist.numberOfReadBooks));
console.log("Number of unread books : ".concat(booklist.numberOfUnreadBooks));

console.log("The last read book is : ".concat(booklist.LastBook.title));
console.log("The current book is : ".concat(booklist.CurrentBook.title));
console.log("The next book to read is : ".concat(booklist.NextBook.title));
console.log("The state of the last read book is : ".concat(booklist.LastBook.read));
console.log("The state of the current book is : ".concat(booklist.CurrentBook.read));
console.log("The date of the last read book is : ".concat(booklist.LastBook.date));
console.log("The date of the current book is : ".concat(booklist.CurrentBook.date));