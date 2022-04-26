import React, {useState} from 'react';
import {useTrendingList} from "../../hooks/trendingList.hook";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import {TrendingCard} from "./TrendingCard";

export function TrendingShowsList() {
  const [alignment, setAlignment] = useState('day');
  const {trendingMovieResponse} = useTrendingList({alignment}, 'tv');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <>
      <Box display='flex' justifyContent='space-between' alignItems='center' margin='30px' marginBottom='10px'>
        <Typography variant='h5' fontWeight={500} textTransform={"uppercase"}>Trending TV shows</Typography>
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
            <TrendingCard item={item} key={item.id}/>
          );
        })
        }
      </Grid>
    </>
  );
}
