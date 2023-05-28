import { configureStore } from "@reduxjs/toolkit";
import combineReducer from "./rootReducer";

const store = configureStore({
  reducer: combineReducer,
});

export default store;
