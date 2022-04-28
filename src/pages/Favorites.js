import React from 'react';
import {useParams} from "react-router-dom";
import Grid from "@mui/material/Grid";
import './Favorites.css';
import { useFavoriteMovies } from '../hooks/favoriteMovies.hook';
import { useFavoriteTVs } from '../hooks/favoriteTVs.hook';
import { FavoriteCard } from '../components/movieDetail/favorits/FavoriteCard';
import {MoviesMainInfo} from "../components/movieDetail/MoviesMainInfo";
import NotFound from "../components/NotFound";





//const TVCounter = 0;

function  Favorites () {
  const params = useParams();
  const account_id = params.id;
  const { FavoriteMoviesResponse, error } = useFavoriteMovies({account_id});
  const {FavoriteTVsResponse} = useFavoriteTVs({account_id});
  // const MovieCounter = FavoriteMoviesResponse.total_results;
  return (
    <Grid container rowSpacing={1}>
      <Grid container item xs={12}>
        {FavoriteMoviesResponse && FavoriteTVsResponse &&
            <MoviesMainInfo FavoriteMoviesResponse={FavoriteMoviesResponse} FavoriteTVsResponse={FavoriteTVsResponse}/>
        }
        {error && <NotFound /> }
      </Grid>
      <Grid container item flexWrap>
        {FavoriteMoviesResponse && FavoriteTVsResponse.cast.map(item => {
          return (
            <FavoriteCard item={item}/>
          );
        })} 

      </Grid>
    </Grid>
  );
}

export default Favorites;
