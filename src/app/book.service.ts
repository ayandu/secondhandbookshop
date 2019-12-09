import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Book } from './book';

@Injectable()
export class BookService {

  private baseUrl = `http://localhost:8000/api/books`;

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.baseUrl);
  }

  getById(id: string): Observable<Book>{
    return this.http.get<Book>(this.baseUrl + `/` + id);
  }
  createBook(book: Book): Observable<Book>{
    return this.http.post<Book>(this.baseUrl, book);
  }
  getImage(id: string): Observable<any>{
    return this.http.get<any>(this.baseUrl+`/`+id+`/image`)
  }

  deleteBook(book: Book): Observable<Book>{
    return this.http.delete<Book>(this.baseUrl + "/" + book.id);
  }

}