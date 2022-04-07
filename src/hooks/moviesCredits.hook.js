import useAxios from "./axios.hook";

export const useMoviesCredits = (props) => {
  const { response, loading, error } = useAxios({
    url: `/movie/${props.filmId}/credits`,
    method: "get"
  });

  return { movieCreditsResponse: response, loading, error};
};

