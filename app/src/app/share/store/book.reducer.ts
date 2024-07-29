import {
  createReducer,
  on,
  State,
  Action,
  createFeatureSelector,
} from '@ngrx/store';
import * as fromActions from './book.action';

export interface BookList {
  id: string;
  title: string;
}

export interface BookState {
  bookList: BookList[];
  isLoading: boolean;
}
export const initialState: BookState = {
  bookList: [],
  isLoading: false,
};

const initBookReducer = createReducer(
  initialState,
  on(fromActions.loadRequest, (state) => ({ ...state, isLoading: true })),
  on(fromActions.loadRequestSuccess, (state, action) => ({
    ...state,
    bookList: action.payload,
    isLoading: false,
  }))
);

export function bookReducer(state: BookState | undefined, action: Action) {
  return initBookReducer(state, action);
}

export const bookStateSelector = createFeatureSelector<BookState>('bookState');
