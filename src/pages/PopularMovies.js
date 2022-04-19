import React from "react";
import {PopularMovieList} from "../components/PopularMovieList";
import {Sort} from "../components/Sort";
import {Paper} from "@mui/material";
import Grid from "@mui/material/Grid";
import '../App.css';

export function PopularMovies () {
  return (
    <Paper >
      <Grid container >
        <Grid xs={12} item>
          <p className="text">Popular movies</p>
        </Grid>
        <Grid container item xs={12} >
          <Grid item xs={12} md={3} sx={{margin: "0 0 20px 0"}}>
            <Sort/>
          </Grid>
          <Grid container item xs={12} md={9}>
            <PopularMovieList/>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
