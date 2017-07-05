import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Product } from "app/modules/product/models";

@Injectable()
export class ProductService {
  apiUrl = 'https://elvis-tek-mix.herokuapp.com/api/product';

  constructor(private http: Http) {

  }

  handleError(error) {
    console.error(error);
  }

  getProducts(): Promise<Product[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json() as Product[])
      .catch(this.handleError);
  }

  search(term: string): Observable<Product[]> {
    var url = this.apiUrl;
    if (term.trim()) {
      url = `${this.apiUrl}?name=${term}`;

    }
    console.log(url);
    return this.http.get(url)
      .map(response => response.json() as Product[]);
  }

}