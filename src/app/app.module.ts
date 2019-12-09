import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookService } from './book.service';
import { BookFormComponent } from './book-form/book-form.component';


@NgModule({
  imports:      [ BrowserModule, HttpClientModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, BookDetailComponent, BookListComponent, BookFormComponent],
  bootstrap:    [ AppComponent ],
  providers: [BookService]
})
export class AppModule { }
