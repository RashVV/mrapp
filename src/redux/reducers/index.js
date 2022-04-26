import {combineReducers} from "redux";
import {popularMoviesReducer} from "./popularMoviesReducer";
import {userAccountReducer} from "./userAccountReducer";
import {popularTVReducer} from "./popularTVReducer";


const allReducers = combineReducers({
  popularMovies: popularMoviesReducer,
  accountInformation: userAccountReducer,
  popularMovies: popularMoviesReducer,
  popularTVs: popularTVReducer
});

export default allReducers;
