import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Autoplay, Pagination, Navigation, Parallax} from "swiper";
import {usePopularMovies} from "../../hooks/popularMovie.hook";
import {config} from "../../api/config";
import './slider.css';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import {MovieCrew} from "./MovieCrew";
import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";

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
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        parallax={true}
        modules={[Autoplay, Pagination, Navigation, Parallax]}
        className='mySwiper'
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}

        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 20,
            autoplay: {
              delay: 3000
            }
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
            autoplay: {
              delay: 5000,
              disableOnInteraction: true
            }
          }
        }}
      >
        {data.map(item => (
          <SwiperSlide key={item.id} >
            {({ isActive }) => (
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
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

