import useAxios from "./axios.hook";

export const useFavoritMovies = ({account_id}) => {
  const { response, loading, error } = useAxios({
    url: `/movie/${account_id}`,
    method: "get"
  });

  return { FavoritMoviesResponse: response, loading, error};
};
