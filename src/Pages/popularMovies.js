import React from "react";
import {PopularMovieList} from "../Components/PopularMovieList";
import {Sort} from "../Components/Sort";
import {PopularMovieProvider} from "../context/PopularMovieProvider";
import {Box} from "@mui/material";

export function PopularMovies () {
  return (
    <PopularMovieProvider>
      <div className="App">
        <p>Popular movies</p>
        <div>
          <Box>
            <Sort/>
          </Box>
          <PopularMovieList/>
        </div>
      </div>
    </PopularMovieProvider>
  );
}
