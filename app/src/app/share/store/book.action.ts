import { createAction, props } from '@ngrx/store';
import * as fromReducer from './book.reducer';

export const loadRequest = createAction('[Book] Load Request');

export const loadRequestSuccess = createAction(
  '[Book] Load Request success',
  props<{ payload: fromReducer.BookList[] }>()
);

export const loadRequestFailure = createAction(
  '[Book] Load Request failure',
  props<{ payload: any }>()
);

export const loadAddBook = createAction(
  '[Book] Add book',
  props<{ payload: fromReducer.BookList }>()
);
