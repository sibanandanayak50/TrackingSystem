import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/reducer.js";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

store.subscribe(() => {
  console.log("state", store.getState());
});
export default store;
