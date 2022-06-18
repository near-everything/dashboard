import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import describeReducer from '../features/describe/describeSlice';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice';
import nearReducer from "../features/near/nearSlice";

const reducers = combineReducers({
  describe: describeReducer,
  counter: counterReducer,
  auth: authReducer,
  near: nearReducer
});

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});
