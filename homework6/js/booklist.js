export default class BookList{
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