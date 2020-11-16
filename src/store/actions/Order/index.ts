import {
    SET_ORDERS,
    SET_ORDERS_LOADED,
    SET_CURRENT_ORDER,
    SET_ERROR
  } from '../actionType';

  import {API_URL} from "@env";

  
  import axios from 'axios';
  import Order from 'models/modules/Order.interface';
  import { Dispatch } from 'redux';
  import State from 'models/State.interface';
  
  export const setOrdersRedux = (payload : Order[]) => ({
    type: SET_ORDERS,
    payload,
  });
  
  export const setLoadedRedux = (payload:boolean) => ({
    type: SET_ORDERS_LOADED,
    payload,
  });
  
  export const setCurrentOrderRedux = (payload:Order | null) => ({
    type: SET_CURRENT_ORDER,
    payload,
  });
  
  export const setError = (payload: any) => ({
    type: SET_ERROR,
    payload,
  });
  
  export const getOrders = () => async (dispatch:Dispatch, getState: () =>State) => {
    try {
      const response = await axios.get(
        `${API_URL}/bill/getBills`,
      );
  
      //console.log(response.data.data);
  
      dispatch(setOrdersRedux(response.data.data));
      dispatch(setLoadedRedux(true));
    } catch (e) {
      dispatch(setError(e));
      console.warn(e);
    }
  };
  
  