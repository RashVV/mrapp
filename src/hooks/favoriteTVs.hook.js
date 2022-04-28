import useAxios from "./axios.hook";

export const useFavoriteTVs = ({account_id}) => {
  const { response, loading, error } = useAxios({
    url: `/account/${account_id}/favorite/tv`,
    method: "get"
  });

  return { FavoriteTVsResponse: response, loading, error};
};
