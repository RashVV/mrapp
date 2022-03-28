import {config
} from '../api/config';

export const fetchSearchAction = async (query, dispatch) => {
  const baseSearchUrl  = 'search/movie';
  const searchUrl = `${baseSearchUrl}?query=${query}`;
  const searchData = await fetch(`${config.api_base_url}${searchUrl}&api_key=${config.api_key}`);
  const response = await searchData.json();
  return dispatch(
    { type: 'search', payload: response.results}
  );
};

export const fetchCollectionByPageAction = async (page, dispatch) => {
  const popularMovieUrl = 'movie/popular';
  const pageUrl = `${popularMovieUrl}?page=${page}`;
  const pageData = await fetch(`${config.api_base_url}${pageUrl}&api_key=${config.api_key}`);
  const response = await pageData.json();
  return dispatch(
    { type: 'collectionByPage', payload: response}
  );
};

