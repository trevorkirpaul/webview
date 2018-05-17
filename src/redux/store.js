import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import app from './reducers/app';
import insurancePackage from './reducers/insurancePackage';
import doctors from './reducers/doctors';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      app,
      insurancePackage,
      doctors,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
