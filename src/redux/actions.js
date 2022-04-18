import {config
} from '../api/config';

export const fetchSearchAction = async (query, dispatch) => {
  const baseSearchUrl  = 'search/movie';
  const searchUrl = `${baseSearchUrl}?query=${query}`;
  const searchData = await fetch(`${config.api_base_url}${searchUrl}&api_key=${config.api_key}`);
  const response = await searchData.json();
  dispatch({
    type: 'search',
    payload: response.results
  });
};

export const fetchCollectionByPageAction = async (page, dispatch) => {
  const popularMovieUrl = 'movie/popular';
  const pageUrl = `${popularMovieUrl}?page=${page}`;
  const pageData = await fetch(`${config.api_base_url}${pageUrl}&api_key=${config.api_key}`);
  const response = await pageData.json();
  dispatch({
    type: 'collectionByPage',
    payload: response
  });
};

export const descending = () => {
  return {
    type: 'descending'
  };
};

export const ascending = () => {
  return {
    type: 'ascending'
  };
};

export const filterByGenres = (selected) => {
  return {
    type: 'filterByGenres',
    payload: selected
  };
};
