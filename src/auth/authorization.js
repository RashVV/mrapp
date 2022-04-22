import {config} from "../api/config";
import axios from "axios";

const userAccountUrl = 'account';
export const createSession = async (username, password) => {
  const requestTokenUrl = 'authentication/token/new';
  const sessionWithLoginUrl = 'authentication/token/validate_with_login';
  const newSessionUrl = 'authentication/session/new';
  const storageName = 'userSessionId';

  return new Promise(async (resolve, reject) => {
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
            resolve({data: userAccount.data});
          }
        }
      }
    }
  });
};
export const getUserAccount = (sessionId) => {
  return new Promise ( async (resolve, reject) => {
    const userAccount = await axios.get(
      `${config.api_base_url}${userAccountUrl}?api_key=${config.api_key}&session_id=${sessionId}`);
    resolve({data: userAccount.data});
  });
};
