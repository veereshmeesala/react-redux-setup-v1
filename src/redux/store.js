import { createStore, applyMiddleware, compose } from "redux";
import logger from 'redux-logger'
import rootReducer from './reducers/rootReducer';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancer = composeWithDevTools || compose
const middleWare = [thunk, logger];

import configureStore from './store';

function configureStore(state = {}) {
  return createStore(
    rootReducer, composeEnhancer(applyMiddleware(...middleWare)));
}

export default configureStore;
