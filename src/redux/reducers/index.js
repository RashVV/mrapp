import {combineReducers} from "redux";
import {popularMoviesReducer} from "./popularMoviesReducer";

const allReducers = combineReducers({
  popularMovies: popularMoviesReducer,
});

export default allReducers;
