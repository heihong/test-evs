import { createSelector } from '@ngrx/store';
import * as fromReducer from './book.reducer';

export const selectBookList = createSelector(
  fromReducer.bookStateSelector,
  (state) => state.bookList
);
export const selectLoading = createSelector(
  fromReducer.bookStateSelector,
  (state) => state.isLoading
);
