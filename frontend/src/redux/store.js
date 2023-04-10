import { configureStore, combineReducers } from "@reduxjs/toolkit";
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
import topicReducer from "./slices/topicSlice";

const rootReducer = combineReducers({
  course: courseReducer,
  topic: topicReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["course", "topic"],
};

export const persist = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persist,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
