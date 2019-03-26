import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Product } from './IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  uriCreate = `http://carelinenigeria.herokuapp.com/products/create`;
  uriUpdate = `http://carelinenigeria.herokuapp.com/products/update`;
  uriDelete = `http://carelinenigeria.herokuapp.com/products/categories/delete`;
  uriGetOne = `http://carelinenigeria.herokuapp.com/products/findById`;
  uriGetByCategory = `http://carelinenigeria.herokuapp.com/products`;

  constructor(private http: HttpClient ) { }

  getProductById(id: number): Observable<Product> {
    if (id === 0) {
      return of(this.initializeProduct());
    }
    const url = `${this.uriGetOne}/${id}`;
    return this.http.get<Product>(url)
      .pipe(
        tap(data => console.log('getProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getProductByCategory(catCode: string): Observable<Product> {
    const url = `${this.uriGetByCategory}/${catCode}`;
    return this.http.get<Product>(url)
      .pipe(
        tap(data => console.log('getProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  createProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    product.id = null;
    return this.http.post<Product>(`${this.uriCreate}`, product, { headers: headers })
      .pipe(
        tap(data => console.log('createProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  // updateProduct(product: Product): Observable<Product> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const url = `${this.uriUpdate}/${product.id}`;
  //   return this.http.put<Product>(url, product, { headers: headers })
  //     .pipe(
  //       tap(() => console.log('updateProduct: ' + product.id)),
  //       // Return the product on an update
  //       map(() => product),
  //       catchError(this.handleError)
  //     );
  // }
  deleteProduct(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.uriDelete}/${id}`;
    return this.http.delete<Product>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deleteProduct: ' + id)),
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

  private initializeProduct(): Product {
    // Return an initialized object
    return {
      id: 0,
      title: null,
      subTitle: null,
      price: null,
      description: null,
      imageUrl: null,
      category: null
    };
  }
}


