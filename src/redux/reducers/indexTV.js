import {combineReducers} from "redux";
import {popularTVReducer} from "./popularTVReducer";

const TVReducers = combineReducers({
  popular: popularTVReducer
});

export default TVReducers;
