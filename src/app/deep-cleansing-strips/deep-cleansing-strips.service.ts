
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { DeepCleansingStrips } from './deep-cleansing-strips';

@Injectable({
  providedIn: 'root'
})
export class DeepCleansingStripsService {
  private uri = 'api/deepCleansingStripsProducts';
  url = `http://carelinenigeria.herokuapp.com/products`;

  constructor(private http: HttpClient) { }

  getProducts(catCode: string) {
    console.log(catCode);
    return this.http.get(`${this.url}/${catCode}`);
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
}
