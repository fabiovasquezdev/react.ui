import { configureStore, Tuple } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

const middleware = import.meta.env.DEV ? new Tuple(thunk, logger) : new Tuple(thunk)

const store = configureStore({
  reducer: rootReducer,
  middleware: () => middleware,
})

export default store;
