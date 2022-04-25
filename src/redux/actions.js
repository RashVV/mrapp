import {config
} from '../api/config';
import axios from "axios";

const userAccountUrl = 'account';
const requestTokenUrl = 'authentication/token/new';
const sessionWithLoginUrl = 'authentication/token/validate_with_login';
const newSessionUrl = 'authentication/session/new';
const storageName = 'userSessionId';

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

export const isAuth = () => {
  return (dispatch) => {
    const sessionId = localStorage.getItem("userSessionId");
    if (sessionId !== null) {
      axios.get(
        `${config.api_base_url}${userAccountUrl}?api_key=${config.api_key}&session_id=${sessionId}`).then(value =>
      {
        dispatch({
          type: 'authorized',
          payload: value.data
        });
      });
    }
  };
};

export const createSessionId = (username, password, location, navigate) => {
  return async (dispatch) => {
    try {
      const tokenData = await axios.get(`${config.api_base_url}${requestTokenUrl}?api_key=${config.api_key}`);
      const tokenResponse = tokenData.data;

      if (tokenResponse !== null) {
        const sessionWithLogin = await axios.post(`${config.api_base_url}${sessionWithLoginUrl}?api_key=${config.api_key}`,
          {username: username, password: password, request_token: tokenResponse.request_token});
        const sessionWithLoginResponse = sessionWithLogin.data;

        if (sessionWithLoginResponse.success) {
          const newSession = await axios.post(`${config.api_base_url}${newSessionUrl}?api_key=${config.api_key}`,
            {request_token: sessionWithLoginResponse.request_token});
          const newSessionResponse = newSession.data;

          if (newSessionResponse && newSessionResponse.success) {
            localStorage.setItem(storageName, newSessionResponse.session_id);
            const userSessionId = newSessionResponse.session_id;

            if (userSessionId !== null) {
              const userAccount = await axios.get(
                `${config.api_base_url}${userAccountUrl}?api_key=${config.api_key}&session_id=${userSessionId}`);

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
          }
        }
      }
    }
    catch (e) {
      debugger;
      dispatch(loginFailure(e.response.data.status_message));
    }
  };
};


export const userLogout = () => {
  localStorage.removeItem("userSessionId");
  return {
    type: 'logout'
  };
};

export const loginFailure = (message) => {
  return {
    type: 'loginFailure',
    payload: message
  };
};

export const errorReset = () => {
  return {
    type: 'errorReset'
  };
};
