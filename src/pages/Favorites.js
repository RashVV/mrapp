import React from 'react';
import {useParams} from "react-router-dom";
import Grid from "@mui/material/Grid";
import './Favorites.css';
import { useFavoriteMovies } from '../hooks/favoriteMovies.hook';
import { useFavoriteTVs } from '../hooks/favoriteTVs.hook';
import { FavoriteCard } from '../components/movieDetail/favorits/FavoriteCard';
import {MoviesMainInfo} from "../components/movieDetail/MoviesMainInfo";
import NotFound from "../components/NotFound";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserDetailsId} from '../redux/actions';





//const TVCounter = 0;

function  Favorites () {
  const {
    accountResponse,
    isAuthorized,
    isError,
    errorText,
  } = useSelector((state) => state.accountInformation);
  const dispatch = useDispatch();
  const favHandler = (event, page) => {
    fetchUserDetailsId(page, dispatch);
  };

  //const params = useParams();
  const account_id = accountResponse.id;
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
