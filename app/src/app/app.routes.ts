import { Routes } from '@angular/router';
import { bookResolver } from './share/resolver/book.resolver';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './share/store/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './share/store/book.effect';
import { BooksComponent } from './features/books/books.component';
import { BookEditComponent } from './features/book-edit/book-edit.component';

export const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    resolve: {
      data: bookResolver,
    },
    providers: [
      importProvidersFrom(
        // register feature reducer
        StoreModule.forFeature('bookState', bookReducer),
        EffectsModule.forFeature([BookEffects])
      ),
    ],
  },
  {
    path: 'edit',
    component: BookEditComponent,
  },
];
