import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Autoplay, Pagination, Navigation, Parallax} from "swiper";
import {usePopularMovies} from "../../hooks/popularMovie.hook";
import './slider.css';
import {SliderContent} from "./SliderContent";

export default function Slider () {
  const {response} = usePopularMovies();
  const data = response ? response.results : [];

  return (
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
            <SliderContent item={item} isActive={isActive}/>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

