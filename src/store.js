import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../src/features/authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// persist config
const persistConfig = {
  key: "root",
  storage,
};

// wrap auth reducer
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
});

// persistor to use in index.js
export const persistor = persistStore(store);
