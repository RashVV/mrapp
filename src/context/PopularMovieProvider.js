import React, {useEffect, useReducer, useState} from "react";
import useAxios from "../hooks/axios.hook";
import Context from "./context";
import {reducer} from "./reducer";
import {usePopularMovies} from "../hooks/popularMovie.hook";

const initialState = {
  collection: [],
  searchResult: [],
  sortBy: "",
  filterBy: "",
  selectedGenres: [],
  searchParams: '',
  page: 1,
  totalPages: 0
};

const PopularMovieProvider = ({children}) => {
  const popularMovieUrl = '/movie/popular';
  const baseSearchUrl  = '/search/movie';
  const [query, setQuery] = useState('');
  // const {response, loading, error} = usePopularMovies();

  const [currentPage, setCurrentPage] = useState(1);
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchRequest = useAxios({url: `${baseSearchUrl}?query=${query}`, method: "get"});
  const searchResponse = searchRequest.response;
  const pageRequest = useAxios({url: `${popularMovieUrl}?page=${currentPage}`, method: "get"});
  const pageResponse = pageRequest.response;

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

  const dispatchPagination = (currentPage) => {
    dispatch({type: 'pagination', payload: currentPage});
  };

  useEffect(() => {
    if (state.searchParams){
      setQuery(state.searchParams);
    }
  }, [state.searchParams]);

  useEffect(() =>{
    if (state.page != null) {
      setCurrentPage(state.page);
    }
  }, [state.page]);

  useEffect(() => {
    if(searchResponse && searchResponse.results && searchResponse.results.length) {
      state.searchResult = searchResponse.results;
    }
  }, [state, searchResponse]);

  useEffect(() => {
    if (pageResponse && pageResponse.results && pageResponse.results.length) {
      state.collection = pageResponse.results;
      state.totalPages = pageResponse.total_pages;
    }
  }, [state, pageResponse]);

  return (
    <Context.Provider value={{
      ...state,
      dispatchAscending,
      dispatchDescending,
      dispatchFilterByGenres,
      dispatchSearch,
      dispatchPagination
    }}>
      {children}
    </Context.Provider>
  );
};

export { PopularMovieProvider};
