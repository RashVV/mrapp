import useAxios from "./axios.hook";

export const useMoviesDetail = (props) => {
  const { response, loading, error } = useAxios({
    url: `/movie/${props.filmId}`,
    method: "get"
  });

  return { movieDetailResponse: response, loading, error};
};

