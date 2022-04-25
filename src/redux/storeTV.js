import {configureStore} from "@reduxjs/toolkit";
import TVReducers from "./reducers/indexTV";

export const storeTV = configureStore(
  TVReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

