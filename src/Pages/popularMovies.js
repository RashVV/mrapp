import React from "react";
import {PopularMovieList} from "../Components/PopularMovieList";
import {Sort} from "../Components/Sort";
import {PopularMovieProvider} from "../context/PopularMovieProvider";
import {Paper} from "@mui/material";
import Grid from "@mui/material/Grid";
import {PaginationList} from "../Components/PaginationList";
import '../App.css';

export function PopularMovies () {
  return (
    <PopularMovieProvider>
      <Paper >
        <Grid container sx={{margin: "0 20px"}}>
          <Grid xs={12} item>
            <p className="text">Popular movies</p>
          </Grid>
          <Grid container item xs={12} >
            <Grid item xs={12} md={3}>
              <Sort/>
            </Grid>
            <Grid container item xs={12} md={9}>
              <PopularMovieList/>
            </Grid>
            <Grid container item sx={{display: "flex",
              justifyContent: 'center',
              margin: "0 0 20px 20px"
            }}>
              <PaginationList />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </PopularMovieProvider>
  );
}
