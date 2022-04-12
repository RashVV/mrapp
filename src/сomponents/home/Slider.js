import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from "swiper";
import {usePopularMovies} from "../../hooks/popularMovie.hook";
import {config} from "../../api/config";
import './slider.css';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import {MovieCrew} from "./MovieCrew";
import {useNavigate} from "react-router-dom";

const width = "w500";

export default function Slider () {
  const imageUrl = `${config.api_img_url + width}`;
  const {response} = usePopularMovies();
  const data = response ? response.results : [];
  const navigate = useNavigate();

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'

      >
        {data.map(item => (
          <SwiperSlide key={item.id} >
            {({ isActive }) => (
              <Grid container flexDirection='column' style={{
                backgroundImage: `linear-gradient(rgb(0 0 0 / 77%), rgb(0 0 0 / 60%)),
           url(${imageUrl + item.backdrop_path})`,
                width: '100%',
                height: "500px",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
                <Grid container item xs={7} md={4} display='flex' flexDirection='column' justifyContent='space-between' margin='20px 70px'>
                  <Grid item>
                    <Typography variant='h4' color='#fff' fontWeight={300} margin='20px 0'>
                      {item.title}
                    </Typography>
                    <Typography variant='h6' color='#fff' fontWeight={300}>
                      {item.overview}
                    </Typography>
                    {isActive && <MovieCrew filmId={item.id} /> }
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
                <Grid container item xs={3} md={3} display='flex'  marginTop='30px'>
                  <img src={imageUrl + item.poster_path} alt="Poster" width='80%'/>
                </Grid>
              </Grid>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

