import useAxios from "./axios.hook";

export const useTrendingList = (period, type) => {
  const {response, loading, error} = useAxios({
    method: "get",
    url: `/trending/${type}/${period.alignment}`
  });
  return {trendingMovieResponse: response, loading, error};
};
