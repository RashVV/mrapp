import {config
} from '../api/config';
import {getAccount, getSessionId, getSessionWithLogin, getToken} from "../auth/authorizationRequests";

export const fetchSearchAction = (query) => {
  return async (dispatch) => {
    const baseSearchUrl = 'search/movie';
    const searchUrl = `${baseSearchUrl}?query=${query}`;
    const searchData = await fetch(`${config.api_base_url}${searchUrl}&api_key=${config.api_key}`);
    const response = await searchData.json();
    if(response) {
      dispatch({
        type: 'search',
        payload: response.results
      });
    }
  };
};

export const fetchCollectionByPageAction = (page) => {
  return async (dispatch) => {
    const popularMovieUrl = 'movie/popular';
    const pageUrl = `${popularMovieUrl}?page=${page}`;
    const pageData = await fetch(`${config.api_base_url}${pageUrl}&api_key=${config.api_key}`);
    const response = await pageData.json();
    dispatch({
      type: 'collectionByPage',
      payload: response
    });
  };
};

export const fetchCollectionTVByPageAction = async (page, dispatch) => {
  const popularTVUrl = 'tv/popular';
  const pageUrl = `${popularTVUrl}?page=${page}`;
  const pageData = await fetch(`${config.api_base_url}${pageUrl}&api_key=${config.api_key}`);
  const response = await pageData.json();
  return dispatch(
    { type: 'collectionByPage', payload: response}
  );
};

export const fetchTVSearchAction = async (query, dispatch) => {
  const baseSearchUrl  = 'search/tv';
  const searchUrl = `${baseSearchUrl}?query=${query}`;
  const searchData = await fetch(`${config.api_base_url}${searchUrl}&api_key=${config.api_key}`);
  const response = await searchData.json();
  return dispatch(
    { type: 'search', payload: response.results}
  );
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

export const isAuthAction = () => {
  return async (dispatch) => {
    const sessionId = localStorage.getItem("userSessionId");
    if (sessionId !== null) {
      const userAccountResponse = await getAccount(sessionId);
      if (userAccountResponse !== null) {
        dispatch({
          type: 'authorized',
          payload: userAccountResponse.data
        });
      }
    }
  };
};

export const createSessionIdAction = (username, password, location, navigate) => {
  return async (dispatch) => {
    try {
      const tokenResponse = await getToken();
      const sessionWithLoginResponse = await getSessionWithLogin(username, password, tokenResponse);
      const userSessionId = await getSessionId(sessionWithLoginResponse);
      const userAccount = await getAccount(userSessionId);
      if (userAccount !== null) {
        dispatch({
          type: 'authorized',
          payload: userAccount.data
        });
        if (location.state?.from) {
          navigate(location.state.from);
        }
      }
    }
    catch (e) {
      dispatch(loginFailureAction(e.response.data.status_message));
    }
  };
};

export const fetchUserDetailsId = async (username, dispatch) => {
  const baseFavoriteUrl  = '/account';
  const pageUrl = `${baseFavoriteUrl}`;
  const pageData = await fetch(`${config.api_base_url}${pageUrl}&api_key=${config.api_key}`);
  const response = await pageData.json();
  return dispatch(
    { type: 'userDetailsId', payload: response.id}
  );
};

export const userLogoutAction = () => {
  localStorage.removeItem("userSessionId");
  return {
    type: 'logout'
  };
};

export const loginFailureAction = (message) => {
  return {
    type: 'loginFailure',
    payload: message
  };
};

export const errorResetAction = () => {
  return {
    type: 'errorReset'
  };
};
