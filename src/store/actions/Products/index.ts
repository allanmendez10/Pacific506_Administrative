import {
  SET_CURRENT_PRODUCT,
  SET_ERROR,
  SET_LOADED,
  SET_PRODUCTS,
} from '../actionType';

import axios from 'axios';
import Product from 'models/modules/Product.interface';
import { Dispatch } from 'redux';
import State from 'models/State.interface';
import {API_URL} from "@env";


export const setProductsRedux = (payload : Product[]) => ({
  type: SET_PRODUCTS,
  payload,
});

export const setLoadedRedux = (payload:boolean) => ({
  type: SET_LOADED,
  payload,
});

export const setCurrentProductRedux = (payload:Product | null) => ({
  type: SET_CURRENT_PRODUCT,
  payload,
});

export const setError = (payload: any) => ({
  type: SET_ERROR,
  payload,
});

export const getProducts = () => async (dispatch:Dispatch, getState: () =>State) => {
  try {
    const response = await axios.get(
      `${API_URL}/product/getProducts`,
    );

   // console.log(response.data.data[0]);

    dispatch(setProductsRedux(response.data.data));
    dispatch(setLoadedRedux(true));
  } catch (e) {
    dispatch(setError(e));
    console.warn(e);
  }
};

