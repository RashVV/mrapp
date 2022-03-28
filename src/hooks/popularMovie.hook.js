import useAxios from "./axios.hook";

export const usePopularMovies = () => {
  const {response, loading, error} = useAxios({
    method: "get",
    url: "/movie/popular"
  });
  return {response, loading, error};
};
