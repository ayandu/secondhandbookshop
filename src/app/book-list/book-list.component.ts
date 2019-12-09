import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  
  books = new Array<Book>();

  constructor(private service: BookService) { }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(){ this.service.getAllBooks()
    .subscribe( booklist => this.books = booklist);
  }

  add(book){
    this.service.createBook(book).subscribe(event => 
    this.books.push(event));
  }

  delete(book: Book){
    // delete from ui
    this.books = this.books.filter( b => b.id !== book.id);
    // delete from server
    this.service.deleteBook(book).subscribe();
  }
}