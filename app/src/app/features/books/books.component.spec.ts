import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksComponent } from './books.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectLoading } from '../../share/store/book.selector';
import { BookComponent } from '../book/book.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BookI } from '../../share/models/book.interface';
import * as fromSelectors from './../../share/store/book.selector';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  let store: MockStore;
  let router: Router;
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

  const fakeActivatedRoute = {
    snapshot: { data: {} },
  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BooksComponent,
        BookComponent,
        CommonModule,
        AsyncPipe,
        RouterLink,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        provideMockStore({ initialState }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return items = [book1, book2]', () => {
    store.overrideSelector(fromSelectors.selectBookList, items);
    fixture.detectChanges();
    let books: BookI[];
    component.bookList$.subscribe((x) => {
      books = x;
      expect(books).toEqual(items);
    });
  });

  it('should return loading = false', () => {
    store.overrideSelector(selectLoading, false);
    fixture.detectChanges();
    let loading: boolean;
    component.loading$.subscribe((x) => {
      loading = x;
      expect(loading).toBeFalsy();
    });
  });
});
