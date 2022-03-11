
import React, {useEffect, useReducer, useState} from "react";
import useAxios from "../hooks/axios.hook";
import Context from "./context";

const initialState = {data: [], sortBy: "", filterBy: "", selectedGenres: [], searchParams: '', searchResult: []};

function reducer(state, action) {
  switch (action.type) {
  case "descending":
    return {...state, sortBy: 'descending'};
  case "ascending":
    return {...state, sortBy: 'ascending'};
  case "filterByGenres":
    return {...state, filterBy: 'filterByGenres', selectedGenres: action.payload};
  case "search":
    return {...state, searchParams: action.payload };
  }
}

const PopularMovieProvider = ({children}) => {
  const baseSearchUrl  = '/search/movie';
  const [query, setQuery] = useState('');
  const {response, loading, error} = useAxios({
    method: "get",
    url: "/movie/popular"
  });
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
    <Context.Provider value={{...state, dispatchAscending, dispatchDescending, dispatchFilterByGenres, dispatchSearch}}>
      {children}
    </Context.Provider>
  );
};

export { PopularMovieProvider};
