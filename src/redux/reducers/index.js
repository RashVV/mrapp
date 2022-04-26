import {combineReducers} from "redux";
import {popularMoviesReducer} from "./popularMoviesReducer";
import {popularTVReducer} from "./popularTVReducer";


const allReducers = combineReducers({
  popularMovies: popularMoviesReducer,
  popularTVs: popularTVReducer
});

export default allReducers;
