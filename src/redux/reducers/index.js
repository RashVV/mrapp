import {combineReducers} from "redux";
import {popularMoviesReducer} from "./popularMoviesReducer";
import {userAccountReducer} from "./userAccountReducer";

const allReducers = combineReducers({
  popularMovies: popularMoviesReducer,
  accountInformation: userAccountReducer,
});

export default allReducers;
