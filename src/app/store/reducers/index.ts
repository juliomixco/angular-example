import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from 'app/../environments/environment';
import { productReducer } from './product.reducer';
import { IAppState } from '../state/app.state';

export const reducers: ActionReducerMap<IAppState, any> = {
  products: productReducer,
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production
  ? []
  : [];
