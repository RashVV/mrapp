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
export function popularTVReducer(state = initialState, action) {
  switch (action.type) {
  case "descending":
    return {...state, sortBy: 'descending'};
  case "ascending":
    return {...state, sortBy: 'ascending'};
  case "filterByGenres":
    return {...state, filterBy: 'filterByGenres', selectedGenres: action.payload};
  case "search":
    return {...state, searchActive: !!action.payload, searchResult: action.payload ?? []};
  case "collectionByPage":
    return {...state, page: action.payload.page, collection:  action.payload.results
    };
  default:
    return {...state};  }
}
