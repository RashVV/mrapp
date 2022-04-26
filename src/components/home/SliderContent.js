import React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {MovieCrew} from "./MovieCrew";
import {Button} from "@mui/material";
import {config} from "../../api/config";
import {useNavigate} from "react-router-dom";

const width = "w500";

export function SliderContent({item, isActive}) {
  const imageUrl = `${config.api_img_url + width}`;
  const navigate = useNavigate();
  return(
    <Grid container xs={12} flexDirection='row' sx={{
      backgroundImage: `linear-gradient(rgb(0 0 0 / 77%), rgb(0 0 0 / 60%)),
           url(${imageUrl + item.backdrop_path})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height:'100%'}}
    >
      <Grid container
        item
        xs={12}
        md={7}
        px='45px'
        py='20px'
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        height='100%'>
        <Grid item>
          <Box>
            <Typography variant='h4' color='#fff' fontWeight={300} margin='20px 0'>
              {item.title}
            </Typography>
            {isActive && <MovieCrew filmId={item.id} /> }
            <Typography variant='h6' color='#fff' fontWeight={300} style={{
              'overflow': 'hidden',
              'display': '-webkit-box',
              '-webkit-line-clamp': '6',
              '-webkit-box-orient': 'vertical',
            }}>
              {item.overview}
            </Typography>
          </Box>
        </Grid>
        <Grid item position='absolute' bottom={20}>
          <Button variant='contained' size='large' sx={{
            backgroundColor: '#1565c0',
            width: 'fit-content',
            margin: '20px 0',
            fontWeight: '300'
          }}
          onClick={()=> {
            navigate(`/movie/${item.id}`);
          }}>
                    View details
          </Button>
        </Grid>
      </Grid>
      <Grid container item xs={12} md={5}
        display='flex'
        height='100%'
        px='45px'
        py='20px'>
        <img src={imageUrl + item.poster_path} alt="Poster" style={{
          'maxWidth': '100%',
          'maxHeight': '100%',
          'margin':'auto'
        }}/>
      </Grid>
    </Grid>
  );
}
