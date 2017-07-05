import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Product } from "app/modules/product/models";
import { ProductService } from '../../services/product.service';
import { Subject } from "rxjs/Subject";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  apiURL = '/api';
  products: Observable<Product[]> = Observable.of<Product[]>([]);
  private searchfilter: BehaviorSubject<string>;



  constructor(private http: Http, private productService: ProductService) {

  }

  ngOnInit() {
    this.searchfilter = new BehaviorSubject(""); //initial filter value
    this.setProductSubject();

    // setTimeout(() => this.search(""), 0);

  }

  private setProductSubject() {
    this.products = this.searchfilter
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term =>    // switch to new observable each time the term changes
        this.productService.search(term)
      )
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Product[]>([]);
      });
  }
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchfilter.next(term);
  }

}
