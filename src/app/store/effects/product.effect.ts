import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ProductService } from 'app/modules/product/services/product.service';
import {
  EProductActions,
  GetProductsSuccessAction,
  GetProductsFailureAction,
  GetProductsAction,
  SearchProductsAction,
  SearchProductsSuccessAction,
  SearchProductsFailureAction,
} from '../actions/product.actions';
import { switchMap, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';
@Injectable()
export class ProductEffects {
  constructor(
    private _actions: Actions,
    private _productService: ProductService,
  ) {}

  @Effect()
  getProducts$ = this._actions.pipe(
    ofType<GetProductsAction>(EProductActions.GetProducts),
    switchMap(() => from(this._productService.getProducts())),
    switchMap(products => of(new GetProductsSuccessAction(products))),
    catchError(error => of(new GetProductsFailureAction(error))),
  );

  @Effect()
  searchProducts$ = this._actions.pipe(
    ofType<SearchProductsAction>(EProductActions.SearchProducts),
    switchMap(action => this._productService.search(action.payload.term)),
    switchMap(products => of(new SearchProductsSuccessAction(products))),
    catchError(error => of(new SearchProductsFailureAction(error))),
  );
}
