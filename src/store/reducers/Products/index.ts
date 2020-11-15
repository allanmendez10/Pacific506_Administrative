import {
  SET_CURRENT_PRODUCT,
  SET_ERROR,
  SET_LOADED,
  SET_PRODUCTS,
} from '../../actions/actionType';

import Action from 'models/Action.interface';
import Product from 'models/modules/Product.interface';
import ProductState from 'models/states/ProductState.interface';

const initialState: ProductState = {
  products: [],
  loaded: false,
  currentProduct: null,
  productError: null,
};

export default (state = initialState, {type, payload}:Action) => {
  switch (type) {
    case SET_PRODUCTS:
      return {...state, products: payload as Product[]};

    case SET_LOADED:
      return {...state, loaded: payload as Product};

    case SET_CURRENT_PRODUCT:
      return {...state, currentProduct: payload as Product};

    case SET_ERROR:
      return {...state, postError: payload as Product};

    default:
      return state;
  }
};
