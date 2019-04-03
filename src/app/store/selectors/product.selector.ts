import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { IProductState } from '../state/products.state';

export const getProductSate = (state: IAppState) => state.products;

export const getProducts = createSelector(
  getProductSate,
  (state: IProductState) => state.products,
);

export const getSelectedProduct = createSelector(
  getProductSate,
  (state: IProductState) => state.selectedProduct,
);

export const getProductsWithStock = createSelector(
  getProductSate,
  (state: IProductState) =>
    state.products.filter(product => product.inStock > 0),
);

export const getProductsWithoutStock = createSelector(
  getProductSate,
  (state: IProductState) =>
    state.products.filter(product => product.inStock <= 0),
);
