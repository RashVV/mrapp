import React from 'react';

export function reducer(state, action) {
  switch (action.type) {
  case "descending":
    return {...state, sortBy: 'descending'};
  case "ascending":
    return {...state, sortBy: 'ascending'};
  case "filterByGenres":
    return {...state, filterBy: 'filterByGenres', selectedGenres: action.payload};
  case "search":
    return {...state, searchResult: action.payload ?? []};
  case "searchActive":
    return {...state, searchActive: !!action.payload };
  case "collectionByPage":
    return {
      ...state,
      page: action.payload.page,
      collection:  action.payload.results
    };
  default:
    return {...state};  }
}
