import { Action } from '@ngrx/store';
import { IProduct } from 'app/modules/product/models';
import { ActionFailurePayload } from 'app/modules/state-example/models/error';

export enum EProductActions {
  GetProducts = '[Product] Get Products',
  GetProductsFailure = '[Product] Get ProductsFailure',
  GetProductsSuccess = '[Product] Get Products Success',
  SearchProducts = '[Product] Search Products',
  SearchProductsFailure = '[Product] Search ProductsFailure',
  SearchProductsSuccess = '[Product] Search Products Success',
}

export class GetProductsAction implements Action {
  public readonly type = EProductActions.GetProducts;
}

export class GetProductsSuccessAction implements Action {
  public readonly type = EProductActions.GetProductsSuccess;
  constructor(public payload: IProduct[]) {}
}

export class GetProductsFailureAction implements Action {
  public readonly type = EProductActions.GetProductsFailure;
  public payload: ActionFailurePayload;
  constructor(error: any) {
    this.payload = { error };
  }
}

interface ISearchProductsPayload {
  term: string;
}

export class SearchProductsAction implements Action {
  public readonly type = EProductActions.SearchProducts;
  public payload: ISearchProductsPayload;
  constructor(term: string) {
    this.payload = { term };
  }
}

interface ISearchProductsSuccessPayload {
  products: IProduct[];
}

export class SearchProductsSuccessAction implements Action {
  public readonly type = EProductActions.SearchProductsSuccess;
  public payload: ISearchProductsSuccessPayload;
  constructor(products: IProduct[]) {
    this.payload = {
      products,
    };
  }
}

export class SearchProductsFailureAction implements Action {
  public readonly type = EProductActions.SearchProductsFailure;
  public payload: ActionFailurePayload;
  constructor(error: any) {
    this.payload = { error };
  }
}

export type ProductActions =
  | GetProductsAction
  | GetProductsSuccessAction
  | GetProductsFailureAction
  | SearchProductsAction
  | SearchProductsSuccessAction
  | SearchProductsFailureAction;
