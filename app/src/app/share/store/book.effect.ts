import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import * as fromActions from './book.action';
import { HttpClient } from '@angular/common/http';
import { BookList } from './book.reducer';

@Injectable()
export class BookEffects {
  http = inject(HttpClient);
  actions$ = inject(Actions);

  loadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.loadRequest),
      mergeMap((_) =>
        this.http.get<any>('http://localhost:3000/api/items').pipe(
          map((result: BookList[]) => {
            return fromActions.loadRequestSuccess({ payload: result });
          }),
          catchError((error) => of(fromActions.loadRequestFailure(error)))
        )
      )
    );
  });

  loadAddBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.loadAddBook),
      mergeMap(({ payload }) =>
        this.http.post<any>('http://localhost:3000/api/items', payload).pipe(
          map((result: BookList[]) => {
            return fromActions.loadRequestSuccess({ payload: result });
          }),
          catchError((error) => of(fromActions.loadRequestFailure(error)))
        )
      )
    );
  });
}