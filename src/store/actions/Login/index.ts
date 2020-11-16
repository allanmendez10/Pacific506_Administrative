import {
    SET_LOGIN,
    SET_USER_LOGGED,
    SET_ERROR,
  } from '../actionType';

  import {API_URL} from "@env";
  
  import axios from 'axios';
  import { Dispatch } from 'redux';
  import State from 'models/State.interface';
import User from 'models/modules/User.interface';
  
  export const setIsLoggedRedux = (payload : boolean) => ({
    type: SET_LOGIN,
    payload,
  });
  
  export const setUserLoggedRedux = (payload:User) => ({
    type: SET_USER_LOGGED,
    payload,
  });
  
  export const setError = (payload: any) => ({
    type: SET_ERROR,
    payload,
  });
  

  export const login = (username:String, password:String) => async (dispatch:Dispatch, getState: () =>State) => {
    try {

      const response = await axios.post(
        `${API_URL}/user/login`,{
            email:username,
            password:password
        }
      );
  
    // console.log(response.data.isSuccessFull);
  
      dispatch(setUserLoggedRedux(response.data.data.user));
      dispatch(setIsLoggedRedux(response.data.isSuccessFull));
    } catch (e) {
      dispatch(setError(e));
      console.warn(e);
    }
  };
  
  