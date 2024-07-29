import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEditComponent } from './book-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('BookEditComponent', () => {
  let store: MockStore;
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

  let component: BookEditComponent;
  let fixture: ComponentFixture<BookEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookEditComponent, ReactiveFormsModule, FormsModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(BookEditComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call dispatch', () => {
    component.bookForm.patchValue({ title: 'livre2' });
    spyOn(store, 'dispatch');
    component.sendBook();
    expect(store.dispatch).toHaveBeenCalled();
  });
});
