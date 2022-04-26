import useAxios from "./axios.hook";

export const useTVGenresList = () => {
  const { response, loading, error } = useAxios({
    url: "/genre/tv/list",
    method: "get"
  });
  return {response, loading, error};
};
