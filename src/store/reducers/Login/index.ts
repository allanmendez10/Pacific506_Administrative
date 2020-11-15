import {
    SET_LOGIN, SET_USER_LOGGED, SET_ERROR
  } from '../../actions/actionType';
  
import Action from 'models/Action.interface';
import UserState from 'models/states/UserState.interface';
import User from 'models/modules/User.interface';
  
  const initialState: UserState = {
    user: null,
    is_logged: false,
    userError: null,
  };
  
  export default (state = initialState, {type, payload}:Action) => {
    switch (type) {
      case SET_LOGIN:
        return {...state, is_logged: payload as boolean};
  
      case SET_USER_LOGGED:
        return {...state, user: payload as User};
  
      case SET_ERROR:
        return {...state, userError: payload as any};
  
      default:
        return state;
    }
  };
  