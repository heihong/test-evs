import { ResolveFn } from '@angular/router';
import * as fromReducer from '../store/book.reducer';
import * as fromActions from '../store/book.action';

import { inject } from '@angular/core';
import { Store } from '@ngrx/store';

export const bookResolver: ResolveFn<any> = (route, state) => {
  const bookStore = inject(Store<fromReducer.BookState>);
  bookStore.dispatch(fromActions.loadRequest());
  return state;
};
