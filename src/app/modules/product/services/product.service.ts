import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Product } from "app/modules/product/models";
import { EndpointsService } from "app/modules/core/services/endoints.service";

@Injectable()
export class ProductService {


  constructor(private http: Http, private endpoints: EndpointsService) {

  }

  handleError(error) {
    console.error(error);
  }

  getProducts(): Promise<Product[]> {
    return this.http.get(this.endpoints.store.products())
      .toPromise()
      .then(response => response.json() as Product[])
      .catch(this.handleError);
  }

  getProduct(id: String): Promise<Product> {
    return this.http.get(this.endpoints.store.productById(id))
      .toPromise()
      .then(response => response.json() as Product)
      .catch(this.handleError);
  }

  search(term: string): Observable<Product[]> {
    var url = this.endpoints.store.products();
    if (term.trim()) {
      url = `${this.endpoints.store.products()}?name=${term}`;

    }
    console.log(url);
    return this.http.get(url)
      .map(response => response.json() as Product[]);
  }

}