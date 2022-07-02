import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import authReducer from "../features/auth/authSlice";
import describeReducer from "../features/describe/describeSlice";
import nearReducer from "../features/near/nearSlice";

const reducers = combineReducers({
  describe: describeReducer,
  auth: authReducer,
  near: nearReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
