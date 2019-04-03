import { of as observableOf, Observable, BehaviorSubject } from 'rxjs';

import {
  catchError,
  switchMap,
  distinctUntilChanged,
  debounceTime,
  map,
} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { IProduct } from 'app/modules/product/models';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'app/store/state/app.state';
import { SearchProductsAction } from 'app/store/actions/product.actions';
import {
  getProducts,
  getProductSate,
} from 'app/store/selectors/product.selector';

@Component({
  selector: 'app-state-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  apiURL = '/api';
  //subscribe to store changes
  products: Observable<IProduct[]> = this._store.pipe(select(getProducts));
  error = this._store.pipe(
    select(getProductSate),
    map(state => state.error),
  );
  private searchfilter: BehaviorSubject<string>;

  constructor(private http: Http, private _store: Store<IAppState>) {}

  ngOnInit() {
    this.searchfilter = new BehaviorSubject(''); // initial filter value
    this.setProductSubject();
  }

  private setProductSubject() {
    console.log('set subject');

    this.searchfilter
      .pipe(
        debounceTime(300), // wait 300ms after each keystroke before considering the term
        distinctUntilChanged(), // ignore if next search term is same as previous
      )
      .subscribe((
        term, // switch to new observable each time the term changes
      ) => {
        console.log(`dispatch Term: ${term}`);

        this._store.dispatch(new SearchProductsAction(term));
      });
  }
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchfilter.next(term);
  }
}
