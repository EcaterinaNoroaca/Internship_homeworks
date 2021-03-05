import {Book} from './book.js';
import {BookList} from './booklist.js';

const book1 = new Book("Too Good To Be True","mistery","Carola Lovering", "10.10.20");
const book2 = new Book("The Survivors","drama","Jane Harper", "10.02.20");
const book3 = new Book("Who is Maud Dixon?","mistery","Alexandra Andrews", "15.10.20");
const book4 = new Book("Every Last Fear","drama","Alex Finlay", "10.12.20");
const book5 = new Book("The Four Winds","mistery","Kristin Hannah", "14.11.20");

let booklist = new BookList();

export {book1,book2,book3,book4,book5,booklist};