import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Book } from '../book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  @Output() createdEventEmitter: EventEmitter<Book> = new EventEmitter<Book>();
  
  bookForm = this.fb.group({
    title: [''],
    publisher: [''],
    authors: this.fb.array([
      this.fb.control('')]
    ),
    categories: this.fb.array([
      this.fb.control('')
    ]),
    publishedDate: [Date],
    price: [0],
    imageName: [''],
    quantity:[0]
  });
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get authors() {
    return this.bookForm.get('authors') as FormArray;
  }

  get categories() {
    return this.bookForm.get('categories') as FormArray;
  }

  addToCart(){
    console.log('add me');
  }

  removeFromCart(){
    console.log('remove me');
  }
  
  updateBook() {
    this.bookForm.patchValue({
      price: [0]
    });
  }

  addAuthor() {
    this.authors.push(this.fb.control(''));
  }

  addCategory() {
    this.categories.push(this.fb.control(''));
  }
  
  onSubmit(){

      let book = new Book(null,
        this.bookForm.get('title').value,
        this.bookForm.get('publisher').value,
        this.bookForm.get('authors').value,
        this.bookForm.get('categories').value,
        new Date(),
        this.bookForm.get('publishedDate').value,
        this.bookForm.get('price').value,
        this.bookForm.get('imageName').value,
        this.bookForm.get('quantity').value);
        
      this.createdEventEmitter.emit(book);
    }
}