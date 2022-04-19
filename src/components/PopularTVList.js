import React, {useContext} from "react";
import {MovieCard} from "./MovieCard";
import Context from "../context/context";
import {Grid, Typography} from "@mui/material";
import {PaginationList} from "./PaginationList";
export function PopularTVList() {
  const {
    collection,
    sortBy,
    selectedGenres,
    filterBy,
    searchActive,
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
  let list = getList(filteredList, sortBy);

  return (
    <>
      {searchActive &&
        <Grid container item xs={12}>
          <Grid item xs={12}><Typography sx={{mb: 2, px: 2}} variant='h4'>Search Result:</Typography></Grid>
          {
            searchResult && !searchResult.length &&
              <Typography variant='h6' sx={{px: 2}}>Films are not found</Typography>
          }
          {
            searchResult && searchResult.length > 0 && searchResult.map((item, index) => {
              return (
                <MovieCard item={item}/>
              );
            })
          }
        </Grid>
      }
      {!searchActive &&
          <Grid container>
            <Grid container item xs={12}>
              {list && list.map((item, index) => {
                return (
                  <MovieCard item={item}/>
                );
              }
              )}
            </Grid>
            <Grid container item sx={{display: "flex",
              justifyContent: 'center',
              margin: "0 0 20px 20px"
            }}>
              <PaginationList />
            </Grid>
          </Grid>
      }
    </>
  );
}
