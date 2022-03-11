import React from "react";
import {PopularMovieList} from "../components/PopularMovieList";
import {Sort} from "src/components/Sort";
import {PopularMovieProvider} from "src/context/PopularMovieProvider";
import {Box} from "@mui/material";

export function PopularMovies () {
  // const {response} = useAxios({url: "/movie/popular", method: "get"})
  return (
    <PopularMovieProvider>
      <div className="App">
        <p>Popular movies</p>
        <div>
          <Box>
            <Sort/>
          </Box>

          {/*<Filter/>*/}
          <PopularMovieList/>
        </div>
        {/*<div>*/}
        {/*    {response}*/}
        {/*</div>*/}
      </div>
    </PopularMovieProvider>
  );
}
