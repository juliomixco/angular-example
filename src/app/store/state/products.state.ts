import { IProduct } from 'app/modules/product/models';

export interface IProductState {
  products: IProduct[];
  selectedProduct: IProduct;
  error: any;
}

export const initialProductSate: IProductState = {
  products: [],
  selectedProduct: null,
  error: null,
};
