import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Category} from './ICategory';
import {ENV} from '../../core/config/env.config';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  uriCreate = `${ENV.BASE_API}/products/createCategory`;
  uriGetOne = `${ENV.BASE_API}/products/categories`;
  uriGetAll = `${ENV.BASE_API}/products/categories`;
  uriDelete = `${ENV.BASE_API}/products/categories/delete`;

  constructor(private http: HttpClient) {
  }

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
      .pipe(catchError(this.handleError));
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.uriCreate}`, category)
      .pipe(
        tap(data => console.log('createCategory: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteCategory(id: number): Observable<{}> {
    const url = `${this.uriDelete}/${id}`;
    return this.http.delete<Category>(url).pipe(catchError(this.handleError));
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
