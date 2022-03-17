import React, {useContext} from "react";
import {Container} from "@mui/material";
import {MovieCard} from "./MovieCard";
import { PopularMovieProvider} from "../context/PopularMovieProvider";
import Context from "../context/context";
import {PaginationList} from "./PaginationList";
export function PopularMovieList() {
  const {
    collection,
    sortBy,
    selectedGenres,
    filterBy,
    searchParams,
    searchResult,
  } = useContext(Context);
  const sortByDesc = (a, b) => new Date(b.release_date) - new Date(a.release_date);
  const sortByAsc = (a, b) => new Date(a.release_date) - new Date(b.release_date);
  const genresFilter = function (film) {
    return film.genre_ids.some(function (genreId) {
      return selectedGenres.some(function (selected) {
        return genreId === selected.id;
      });
    });
  };
  const getList = (collection, sort) => {
    switch (sort) {
    case 'descending':
      return sortCards(sortByDesc)(collection);
    case 'ascending':
      return sortCards(sortByAsc)(collection);
    default:
      return collection;
    }
  };

  const sortCards = (callback) => {
    return cards => cards.slice().sort(callback);
  };
  const filterCards = (callback) => {
    return cards => cards.slice().filter(callback);
  };
  const getFilteredList = (collection, filter) => {
    switch (filter) {
    case 'filterByGenres':
      return filterCards(genresFilter)(collection);
    default:
      return collection;
    }
  };

  let filteredList = getFilteredList(collection, filterBy);
  let list = searchParams ? searchResult : getList(filteredList, sortBy);
  return (
    <PopularMovieProvider>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-end",
          marginRight: "0",
        }}>
        {searchParams && !list.length && <div>Films are not found</div>}
        {list && list.map((item, index) => {
          return (
            <MovieCard item={item}/>
          );
        }
        )}
      </Container>
      <PaginationList />
    </PopularMovieProvider>
  );
}
