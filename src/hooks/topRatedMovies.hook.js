import useAxios from "./axios.hook";

export const useTopRatedMovies = () => {
  const {response, loading, error} = useAxios({
    method: "get",
    url: '/movie/top_rated'
  });
  return {topRatedMoviesResponse: response, loading, error};
};
