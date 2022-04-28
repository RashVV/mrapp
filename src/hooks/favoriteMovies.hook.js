import useAxios from "./axios.hook";

export const useFavoriteMovies = ({account_id}) => {
  const { response, loading, error } = useAxios({
    url: `/account/${account_id}/favorite/movies`,
    method: "get"
  });

  return { FavoriteMoviesResponse: response, loading, error};
};
