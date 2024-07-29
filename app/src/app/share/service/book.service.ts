import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BookI } from '../models/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  http = inject(HttpClient);
  constructor() {}

  getBooks() {
    return this.http.get<BookI[]>('http://localhost:3000/api/items');
  }
}
