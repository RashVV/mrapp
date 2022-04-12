import React from "react";
import Slider from "../сomponents/home/Slider";
import {TrendingMovieCard} from "../сomponents/home/TrendingMovieCard";
import {useTrendingMovies} from "../hooks/trendingMovie.hook";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";

export function MainPage () {
  const {trendingMovieResponse} = useTrendingMovies();
  const [alignment, setAlignment] = React.useState('day');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Grid container xs={12}>
      <Grid container item xs={12}>
        <Slider/>
      </Grid>
      <Grid container item flexWrap='nowrap' xs={12} flexDirection='column' >
        <Box display='flex' justifyContent='space-between' alignItems='center' margin='30px '>
          <Typography variant='h5' fontWeight={500} textTransform={"uppercase"}>Trending movies</Typography>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value="day">Day</ToggleButton>
            <ToggleButton value="week">Week</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Grid container item className='cast-list'
          sx={{
            overflowX: 'scroll',  flexDirection: "column"}}>
          { trendingMovieResponse && trendingMovieResponse.results.map(item => {
            return (
              <TrendingMovieCard item={item} />
            );
          })
          }
        </Grid>
      </Grid>
    </Grid>
  );
}
