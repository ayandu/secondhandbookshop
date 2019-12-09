import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  @Output() deletedEventEmitter = new EventEmitter<Book>();
  @Input() book: Book;
  //image: ImageData;
  detail: boolean = true;
  constructor(private service: BookService) { }

  ngOnInit(){
    //this.getImage(this.book.id);
  }/*
  getImage(id: string){
    this.service.getImage(id).subscribe( book_info => this.image = book_info);
  }*/
  onToggle(){
    this.detail = !this.detail;
  }

  deleteById(){
    this.deletedEventEmitter.emit(this.book);
  }

}