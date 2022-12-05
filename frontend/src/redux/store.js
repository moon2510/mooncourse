import { configureStore,combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import courseReducer from "./slices/courseSlice";


const rootReducer = combineReducers({
    course: courseReducer
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ['course']
};

export const persist = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persist,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk:true,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
