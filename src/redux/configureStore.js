import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/booksReducer';

const combineMiddleware = [logger, thunk];

const reducer = combineReducers({ bookStore: booksReducer });

const store = createStore(
  reducer,
  applyMiddleware(...combineMiddleware),
);

export default store;
