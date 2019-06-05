import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {NasalStrips} from './nasal-strips';
import {ENV} from '../core/config/env.config';

@Injectable({
  providedIn: 'root'
})
export class NasalStripsService {
  url = `${ENV.BASE_API}/products`;

  constructor(private http: HttpClient) { }

  getProducts(catCode: string) {
    return this.http.get<NasalStrips[]>(`${this.url}/${catCode}`)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
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
}

