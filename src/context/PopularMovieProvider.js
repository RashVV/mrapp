import React, {useEffect, useReducer} from "react";
import Context from "./context";
import {reducer} from "./reducer";
import {fetchCollectionByPageAction, fetchSearchAction} from "./actions";

const initialState = {
  collection: [],
  searchResult: [],
  sortBy: "",
  filterBy: "",
  selectedGenres: [],
  searchActive: false,
  page: 1,
  totalPages: 1
};

const PopularMovieProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchDescending = () => {
    dispatch({type:'descending'});
  };
  const dispatchAscending = () => {
    dispatch({type: 'ascending'});
  };

  const dispatchFilterByGenres = (selected) => {
    dispatch({type: 'filterByGenres', payload: selected });
  };

  const dispatchSearch = (phrase) => {
    dispatch({type: 'searchActive', payload: phrase});
    fetchSearchAction(phrase, dispatch);
  };

  const dispatchChangedPage = (page) => {
    fetchCollectionByPageAction(page, dispatch);
  };

  useEffect(() => {
    fetchCollectionByPageAction(state.page, dispatch);
  }, []);

  return (
    <Context.Provider value={{
      ...state,
      dispatchAscending,
      dispatchDescending,
      dispatchFilterByGenres,
      dispatchSearch,
      dispatchChangedPage
    }}>
      {children}
    </Context.Provider>
  );
};

export { PopularMovieProvider};