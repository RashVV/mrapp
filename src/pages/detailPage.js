import React from "react";
import {useMoviesDetail} from "../hooks/moviesDetail.hook";
import {useLocation} from "react-router-dom";
import {MoviesMainInfo} from "../сomponents/movieDetail/MoviesMainInfo";
import Grid from "@mui/material/Grid";
import {CastCard} from "../сomponents/movieDetail/CastCard";
import {useMoviesCredits} from "../hooks/moviesCredits.hook";
import {MovieAdditionalInfo} from "../сomponents/movieDetail/movieAdditionalInfo";
import '../сomponents/movieDetail/castList.css';


export function DetailPage () {
  const location = useLocation();
  const filmId = location.state.id;
  const {movieDetailResponse} = useMoviesDetail({filmId});
  const {movieCreditsResponse} = useMoviesCredits({filmId});

  return (
    <Grid container xs={12} >
      <Grid container item xs={12}>
        {movieDetailResponse && movieCreditsResponse &&
            <MoviesMainInfo movieDetailResponse={movieDetailResponse} movieCreditsResponse={movieCreditsResponse}/>
        }
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
