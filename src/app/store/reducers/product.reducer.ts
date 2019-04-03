import { IProductState, initialProductSate } from '../state/products.state';
import { ProductActions, EProductActions } from '../actions/product.actions';

export const productReducer = (
  state: IProductState = initialProductSate,
  action: ProductActions,
): IProductState => {
  switch (action.type) {
    case EProductActions.GetProductsSuccess: {
      return { ...state, products: action.payload, error: null };
    }
    case EProductActions.SearchProductsSuccess: {
      const { products } = action.payload;
      return { ...state, products, error: null };
    }
    case EProductActions.SearchProductsFailure: {
      const { error } = action.payload;
      return { ...state, error };
    }
    default:
      return state;
  }
};
