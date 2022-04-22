import {combineReducers} from "redux";
import {popularReducer} from "./popularReducer";

const allReducers = combineReducers({
  popular: popularReducer
});

export default allReducers;
