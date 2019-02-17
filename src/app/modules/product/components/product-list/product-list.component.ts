import { of as observableOf, Observable, BehaviorSubject, Subject } from 'rxjs';

import {
  catchError,
  switchMap,
  distinctUntilChanged,
  debounceTime,
} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Product } from 'app/modules/product/models';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  apiURL = '/api';
  products: Observable<Product[]> = observableOf<Product[]>([]);
  private searchfilter: BehaviorSubject<string>;

  constructor(private http: Http, private productService: ProductService) {}

  ngOnInit() {
    this.searchfilter = new BehaviorSubject(''); // initial filter value
    this.setProductSubject();

    // setTimeout(() => this.search(""), 0);
  }

  private setProductSubject() {
    this.products = this.searchfilter.pipe(
      debounceTime(300), // wait 300ms after each keystroke before considering the term
      distinctUntilChanged(), // ignore if next search term is same as previous
      switchMap((
        term, // switch to new observable each time the term changes
      ) => this.productService.search(term)),
      catchError(error => {
        // TODO: add real error handling
        console.log(error);
        return observableOf<Product[]>([]);
      }),
    );
  }
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchfilter.next(term);
  }
}
