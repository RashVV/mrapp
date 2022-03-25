import useAxios from "./axios.hook";

export const useGenresList = () => {
  const { response, loading, error } = useAxios({
    url: "/genre/movie/list",
    method: "get"
  });
  return {response, loading, error};
};
