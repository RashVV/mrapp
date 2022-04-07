import React from "react";
import {useMoviesDetail} from "../hooks/moviesDetail.hook";
import {useParams} from "react-router-dom";
import {MoviesMainInfo} from "../сomponents/movieDetail/MoviesMainInfo";
import Grid from "@mui/material/Grid";
import {CastCard} from "../сomponents/movieDetail/CastCard";
import {useMoviesCredits} from "../hooks/moviesCredits.hook";
import {MovieAdditionalInfo} from "../сomponents/movieDetail/movieAdditionalInfo";
import '../сomponents/movieDetail/castList.css';
import NotFound from "../сomponents/NotFound";

export function DetailPage () {
  const params = useParams();
  const filmId = params.id;
  const {movieDetailResponse, error} = useMoviesDetail({filmId});
  const {movieCreditsResponse} = useMoviesCredits({filmId});
  return (
    <Grid container xs={12} >
      <Grid container item xs={12}>
        {movieDetailResponse && movieCreditsResponse &&
            <MoviesMainInfo movieDetailResponse={movieDetailResponse} movieCreditsResponse={movieCreditsResponse}/>
        }
        {error && <NotFound /> }
      </Grid>
      <Grid container item flexWrap='nowrap' xs={12} >
        <Grid container item className='cast-list'
          sx={{
            overflowX: 'scroll',  flexDirection: "column"}}>
          {movieCreditsResponse && movieCreditsResponse.cast.map(item => {
            return(
              <CastCard item={item}/>
            );
          })}
        </Grid>
        <Grid container item xs={4} >
          {movieDetailResponse &&
            <MovieAdditionalInfo movieDetailResponse={movieDetailResponse}/>
          }
        </Grid>
      </Grid>
    </Grid>
  );
}
