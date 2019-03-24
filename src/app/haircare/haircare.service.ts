import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Haircare } from './haircare';

@Injectable({
  providedIn: 'root'
})

export class HaircareService {
  private haircareProductsUrl = 'api/haircareProducts';
  private uri = 'http://localhost:3000/api/haircare';

  constructor(private http: HttpClient) {}

  getHaircareProducts() {
    return this.http.get<Haircare[]>(this.haircareProductsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getHaircareProduct(id: number): Observable<Haircare> {
    if (id === 0) {
      return of(this.initializeProduct());
    }
    const url = `${this.haircareProductsUrl}/${id}`;
    return this.http.get<Haircare>(url)
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

  private initializeProduct(): Haircare {
    // Return an initialized object
    return {
      id: 0,
      productName: null,
      productTitle: null,
      price: null,
      description: null,
      imageUrl: null
    };
  }
}
