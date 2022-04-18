import React from 'react';
import {useTopRatedMovies} from "../../hooks/topRatedMovies.hook";
import {List, ListItemButton} from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";


export function TopRatedMoviesList () {
  const {topRatedMoviesResponse} = useTopRatedMovies();
  const movieReleaseYear = (date) => new Date(date).getFullYear();
  const navigate = useNavigate();
  return (
    <>
      <Grid width='100%'>
        <Typography variant='h5' fontWeight={500} textTransform={"uppercase"} paddingTop='35px' paddingX='15px'>Top-20 Movies</Typography>
        <List sx={{padding: '0'}}>
          { topRatedMoviesResponse && topRatedMoviesResponse.results.map((item, i) => {
            return(
              <ListItemButton
                onClick={() => navigate(`/movie/${item.id}`)}
                sx={{flexWrap: 'wrap'}}
                key={item.id}>
                <Typography>
                  {`${i+1}. ${item.title} (${movieReleaseYear(item.release_date || item.first_air_date)})`}
                </Typography>
              </ListItemButton>

            );
          })
          }
        </List>
      </Grid>
    </>
  );

}
