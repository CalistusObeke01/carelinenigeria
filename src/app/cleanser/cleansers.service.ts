import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Creanser } from './ICleanser';
@Injectable({
  providedIn: 'root'
})
export class CleansersService {
  url = `http://carelinenigeria.herokuapp.com/products`;
  constructor(private http: HttpClient) { }

  getCleansersProducts(catCode: string) {
    return this.http.get<Creanser[]>(`${this.url}/${catCode}`)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getCleansersProduct(id: number): Observable<Creanser> {
    if (id === 0) {
      return of(this.initializeProduct());
    }
    const url = `${this.url}/${id}`;
    return this.http.get<Creanser >(url)
      .pipe(
        tap(data => console.log('getHaircareProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private initializeProduct(): Creanser {
    // Return an initialized object
    return {
      id: 0,
      title: null,
      subTitle: null,
      price: null,
      description: null,
      imageUrl: null,
    };
  }
}
