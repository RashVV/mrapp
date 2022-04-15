import React from "react";
import Slider from "../components/home/Slider";
import Grid from "@mui/material/Grid";
import {TrendingMovieList} from "../components/home/TrendingMovieList";
import {TrendingShowsList} from "../components/home/TrendingShowsList";
import {TopRatedMoviesList} from "../components/home/TopRatedMoviesList";

export function MainPage () {
  return (
    <Grid container xs={12}>
      <Grid container item xs={12}>
        <Slider/>
      </Grid>
      <Grid container item xs={12} md={9}>
        <Grid container item flexWrap='nowrap' xs={12} flexDirection='column' >
          <TrendingMovieList />
        </Grid>
        <Grid container item flexWrap='nowrap' xs={12} flexDirection='column' >
          <TrendingShowsList />
        </Grid>
      </Grid>
      <Grid container item width='auto' xs={12} md={3}>
        <TopRatedMoviesList />
      </Grid>
    </Grid>
  );
}
