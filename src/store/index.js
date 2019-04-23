import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers'

const logger = store => next => action => {
  console.log('dispatching: ', action);
  let result = next(action);
  console.log('next state: ', store.getState());
  return result;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(reducer, composeEnhancers(applyMiddleware(logger)))
