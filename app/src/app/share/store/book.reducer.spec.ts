import { BookI } from '../models/book.interface';
import * as fromReducer from './book.reducer';
import * as fromActions from './book.action';

describe('initBookReducer', () => {
  it('should return the default state', () => {
    let book1 = {
      id: 'book1',
      title: 'angular',
    };

    let book2 = {
      id: 'book2',
      title: 'html',
    };

    let items = [book1, book2];
    const initialState = { bookList: items, isLoading: false };
    const action = fromActions.loadRequest();
    const state = fromReducer.bookReducer(initialState, action);
    expect(state).toEqual({
      bookList: items,
      isLoading: true,
    });
  });

  it('should retrieve all books and update the state', () => {
    let book1 = {
      id: 'book1',
      title: 'angular',
    };

    let book2 = {
      id: 'book2',
      title: 'html',
    };

    let items = [book1, book2];
    const initialState = { bookList: items, isLoading: false };
    const newState: Array<BookI> = items;
    const action = fromActions.loadRequestSuccess({ payload: newState });
    const state = fromReducer.bookReducer(initialState, action);

    expect(state.bookList).toEqual(newState);
  });

  it('should retrieve all books and add the new book', () => {
    let book1 = {
      id: 'book1',
      title: 'angular',
    };

    let book2 = {
      id: 'book2',
      title: 'html',
    };

    let book3 = {
      id: 'book2',
      title: 'html',
    };

    let items = [book1, book2];
    const initialState = { bookList: items, isLoading: false };
    const action = fromActions.loadAddBookRequestSuccess({ payload: book3 });
    const state = fromReducer.bookReducer(initialState, action);

    expect(state.bookList.length).toBe(3);
  });
});
