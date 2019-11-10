import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product, IProductDto } from 'app/modules/product/models';
import { EndpointsService } from 'app/modules/core/services/endoints.service';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient, private endpoints: EndpointsService) {}

  handleError<T>(error): T {
    console.error(error);
    return null;
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<IProductDto[]>(this.endpoints.store.products()).pipe(
      map((response): Product[] => {
        console.log(response);
        return response.map<Product>(x => ({
          ...x,
          id: x._id,
        }));
      }),
      catchError(this.handleError),
    );
    // .then(response => response.json() as Product[])
    // .catch(this.handleError);
  }

  getProduct(id: string): Observable<Product> {
    return this.http
      .get<IProductDto>(this.endpoints.store.productById(id))
      .pipe(
        map(
          (product): Product => {
            console.log(product);
            return {
              ...product,
              id: product._id,
            };
          },
        ),
        catchError(this.handleError),
      );
  }

  search(term: string): Observable<Product[]> {
    let url = this.endpoints.store.products();
    const searchTerm = term.trim();
    const validTerm = searchTerm !== undefined || searchTerm !== '';
    console.log(url);
    return this.http
      .get<IProductDto[]>(url, {
        params: {
          ...(validTerm && { name: searchTerm }),
        },
      })
      .pipe(
        map((response): Product[] => {
          return response.map<Product>(x => ({
            ...x,
            id: x._id,
          }));
        }),
        catchError(this.handleError),
      );
  }
}
