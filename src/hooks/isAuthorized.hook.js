export const useIsAuthorized = () => {
  return localStorage.getItem("userSessionId") === null ? false : true;
};

