import {
    SET_CURRENT_ORDER, SET_ORDERS_LOADED, SET_ORDERS, SET_ERROR
  } from '../../actions/actionType';
  
import Action from 'models/Action.interface';
import BillState from 'models/states/BillState.interface';
import Order from 'models/modules/Order.interface';
  
  const initialState: BillState = {
    orders: [],
    currentBill: null,
    loaded: false,
    billError: null,
  };
  
  export default (state = initialState, {type, payload}:Action) => {
    switch (type) {
      case SET_ORDERS_LOADED:
        return {...state, loaded: payload as boolean};
  
      case SET_CURRENT_ORDER:
        return {...state, order: payload as Order};

      case SET_ORDERS:
        return {...state, orders: payload as Order[]};
  
      case SET_ERROR:
        return {...state, orderError: payload as any};
  
      default:
        return state;
    }
  };
  