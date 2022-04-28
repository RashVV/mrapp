import axios from "axios";
import {config} from "../api/config";

export const getToken = async () => {
  const requestTokenUrl = 'authentication/token/new';
  const tokenData = await axios.get(`${config.api_base_url}${requestTokenUrl}?api_key=${config.api_key}`);
  return tokenData.data;
};

export const getSessionWithLogin = async (username, password, token) => {
  const sessionWithLoginUrl = 'authentication/token/validate_with_login';
  if (token !== null) {
    const sessionWithLogin = await axios.post(
      `${config.api_base_url}${sessionWithLoginUrl}?api_key=${config.api_key}`,
      {username: username, password: password, request_token: token.request_token});
    return  sessionWithLogin.data;
  }
};

export const getSessionId = async (sessionWithLoginResponse) => {
  const newSessionUrl = 'authentication/session/new';
  const storageName = 'userSessionId';
  if (sessionWithLoginResponse.success) {
    const newSession = await axios.post(
      `${config.api_base_url}${newSessionUrl}?api_key=${config.api_key}`,
      {request_token: sessionWithLoginResponse.request_token});
    const newSessionResponse = newSession.data;

    if (newSessionResponse && newSessionResponse.success) {
      localStorage.setItem(storageName, newSessionResponse.session_id);
      return newSessionResponse.session_id;
    }
  }
};

export const getAccount = async (sessionId) => {
  const userAccountUrl = 'account';
  if (sessionId !== null) {
    return await axios.get(
      `${config.api_base_url}${userAccountUrl}?api_key=${config.api_key}&session_id=${sessionId}`);
  }
};


