import useAxios from "./axios.hook";
import {createSessionIdAction} from '../redux/actions';

export const useFavoriteMovies = ({account_id}) => {
  const session_id = toString(createSessionIdAction);
  console.log(session_id);
  debugger;
  const { response, loading, error } = useAxios({
    url: `/account/${account_id}/favorite/movies`,
    method: "get",
  });

  return { FavoriteMoviesResponse: response, loading, error};
};
