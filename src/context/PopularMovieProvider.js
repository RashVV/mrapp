import React, {useEffect, useReducer, useState} from "react";
import useAxios from "../hooks/axios.hook";
import Context from "./context";
import {reducer} from "./reducer";
import {usePopularMovies} from "../hooks/popularMovie.hook";

const initialState = {
  data: [],
  sortBy: "",
  filterBy: "",
  selectedGenres: [],
  searchParams: '',
  searchResult: []
};

const PopularMovieProvider = ({children}) => {
  const baseSearchUrl  = '/search/movie';
  const [query, setQuery] = useState('');
  const {response, loading, error} = usePopularMovies();

  const [state, dispatch] = useReducer(reducer, initialState);
  const searchRequest = useAxios({url: `${baseSearchUrl}?query=${query}`, method: "get"});
  const searchResponse = searchRequest.response;

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
    dispatch({ type: 'search', payload: phrase });
  };

  useEffect(() => {
    if (state.searchParams){
      setQuery(state.searchParams);
    }
  }, [state.searchParams]);

  useEffect(() => {
    if(searchResponse && searchResponse.results && searchResponse.results.length) {
      state.searchResult = searchResponse.results;
    }
  }, [searchResponse]);

  useEffect(() => {
    if (response !== null) {
      state.data = response.results;
    }
  }, [response]);

  return (
    <Context.Provider value={{
      ...state,
      dispatchAscending,
      dispatchDescending,
      dispatchFilterByGenres,
      dispatchSearch
    }}>
      {children}
    </Context.Provider>
  );
};

export { PopularMovieProvider};
