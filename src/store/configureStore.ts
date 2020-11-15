import {createStore, applyMiddleware, Action} from 'redux';
import thunk from 'redux-thunk';
import {combineReducers, compose, Store} from 'redux';
import * as reducers from './reducers';

export default function configureStore(): Store{
  const store = createStore(
    combineReducers({
      ...reducers,
    }),
    compose(applyMiddleware(thunk)),
  );
  return store;
}
