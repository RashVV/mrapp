import useAxios from "./axios.hook";

export const useAuthTokenNew = (props) => {
  const { response, loading, error } = useAxios({
    url: `/authentication/token/new`,
    method: "get"
  });

  return { AuthTokenNewResponse: response, loading, error};
};
