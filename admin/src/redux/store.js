import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducers";
import usersReducer from "./usersReducer";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import productReducer from "./productReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducerUser = persistReducer(persistConfig, userReducer);
const persistedReducerProduct = persistReducer(persistConfig, productReducer);

const reducer = combineReducers({
  user: persistedReducerUser,
  product: persistedReducerProduct,
  users: usersReducer
});



const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

export default store;
