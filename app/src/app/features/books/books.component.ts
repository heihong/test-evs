import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { pipe } from 'rxjs';
import * as fromSelectors from './../../share/store/book.selector';
import * as fromReducer from './../../share/store/book.reducer';
import { CommonModule, AsyncPipe } from '@angular/common';
import { BookComponent } from '../book/book.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [BookComponent, CommonModule, AsyncPipe, RouterLink],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent {
  bookStore = inject(Store<fromReducer.BookState>);
  router = inject(Router);
  route = inject(ActivatedRoute);

  loading$ = this.bookStore.select(pipe(fromSelectors.selectLoading));
  bookList$ = this.bookStore.select(pipe(fromSelectors.selectBookList));
}
