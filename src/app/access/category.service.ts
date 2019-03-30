import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Category } from './ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  uriCreate = `http://carelinenigeria.herokuapp.com/products/createCategory`;
  uriGetOne = `http://carelinenigeria.herokuapp.com/products/categories`;
  uriGetAll = `http://carelinenigeria.herokuapp.com/products/categories`;
  uriDelete = `http://carelinenigeria.herokuapp.com/products/categories/delete`;

  constructor(private http: HttpClient ) { }

  getCategoryById(id: number): Observable<Category> {
    if (id === 0) {
      return of(this.initializeProduct());
    }
    const url = `${this.uriGetOne}/${id}`;
    return this.http.get<Category>(url)
      .pipe(
        tap(data => console.log('getCategory: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getCategories(): Observable<Category[]> {
    const url = `${this.uriGetAll}`;
    return this.http.get<any>(url)
      .pipe(
        tap(data => console.log('getCategories: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  createCategory(category: Category): Observable<Category> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Category>(`${this.uriCreate}`, category, { headers: headers })
      .pipe(
        tap(data => console.log('createCategory: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteCategory(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.uriDelete}/${id}`;
    return this.http.delete<Category>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deleteCategory: ' + id)),
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

  private initializeProduct(): Category {
    // Return an initialized object
    return {
      id: 0,
      name: null,
      code: null,
      description: null,
    };
  }
}
