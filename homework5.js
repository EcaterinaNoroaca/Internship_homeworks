
class BookList{
  numberOfReadBooks = 0;
  numberOfUnreadBooks = 0;
  NextBook;
  CurrentBook;
  LastBook;
  
  books=[];

  add(book){
     this.books.push(book);
     this.numberOfUnreadBooks++;
     if (this.numberOfUnreadBooks == 1) {this.CurrentBook = book};
  }
  
  finishCurrentBook(){
    this.numberOfReadBooks++;
    this.numberOfUnreadBooks--; 
    this.LastBook = this.CurrentBook;
    this.LastBook.read = true;
    this.LastBook.date = new Date(Date.now());
    
    if (this.numberOfReadBooks == (this.books.length - 1)){
        this.CurrentBook = this.books[this.numberOfReadBooks];
        this.NextBook = null;
    } else if(this.numberOfReadBooks >= this.books.length){
        this.CurrentBook = null;
    } else {
       this.CurrentBook = this.books[this.numberOfReadBooks];
       this.NextBook = this.books[this.numberOfReadBooks+1];
    }
  }
}

class Book {
    constructor(title, genre, author, date) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.date = date;
    }
}


const book1 = new Book("Too Good To Be True","mistery","Carola Lovering", "10.10.20");
const book2 = new Book("The Survivors","drama","Jane Harper", "10.02.20");
const book3 = new Book("Who is Maud Dixon?","mistery","Alexandra Andrews", "15.10.20");
const book4 = new Book("Every Last Fear","drama","Alex Finlay", "10.12.20");
const book5 = new Book("The Four Winds","mistery","Kristin Hannah", "14.11.20");

let booklist = new BookList();
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
console.log("The next book to read is : ".concat(booklist.NextBook));
console.log("The state of the last read book is : ".concat(booklist.LastBook.read));
console.log("The state of the current book is : ".concat(booklist.CurrentBook.read));
console.log("The date of the last read book is : ".concat(booklist.LastBook.date));
console.log("The date of the current book is : ".concat(booklist.CurrentBook.date));
