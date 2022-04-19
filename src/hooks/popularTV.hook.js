import useAxios from "./axios.hook";

export const usePopularTV = () => {
  const {response, loading, error} = useAxios({
    method: "get",
    url: '/tv/popular'
  });
  return {response, loading, error};
};
