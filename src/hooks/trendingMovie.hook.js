import useAxios from "./axios.hook";

export const useTrendingMovies = () => {
  const {response, loading, error} = useAxios({
    method: "get",
    url: "/trending/movie/day"
  });
  return {trendingMovieResponse: response, loading, error};
};
