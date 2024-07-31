import { Component, inject } from '@angular/core';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromReducer from './../../share/store/book.reducer';
import * as fromActions from './../../share/store/book.action';
import { BookI } from '../../share/models/book.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgClass],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.scss',
})
export class BookEditComponent {
  bookStore = inject(Store<fromReducer.BookState>);
  bookForm = new FormGroup({
    title: new FormControl('', Validators.required),
  });
  submit = false;

  sendBook() {
    this.submit = true;
    if (!this.bookForm.valid) {
      return;
    }
    this.bookStore.dispatch(
      fromActions.loadAddBook({ payload: this.bookForm.value as BookI })
    );
  }
}
