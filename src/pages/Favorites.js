import React from 'react';
import './Favorites.css';
//import { useFavoritMovies } from '../hooks/favoritMovies.hook';
//import {useParams} from "react-router-dom";

const MovieCounter = 4;
const TVCounter = 0;
function Favorites() {
  //const params = useParams();
  // const filmId = params.id;
  //const account_id = '76341';
  // const {FavoritMoviesResponse, error} = useFavoritMovies({account_id});
  return (
    <div className='page__container'>
      <div className='page__header'>
        <div className='left_page__header'>
          <div className='page__Name'> My Favorites </div>
          <div className='Fav__Movies'> Movies {MovieCounter} </div>
          <div className='Fav__TV'> TV {TVCounter} </div>
        </div>
        <div className='Right_page__header'>
          <div className='Fav__filter'> Filter by: </div>
          <div className='Fav__filter__sort'> Date Added </div>
          <div className='Fav__filter__order'> Order: </div>
          <button>A</button>
        </div>
      
      </div>
      <div>
        <div className='Fav_card'>
          <img src='logo' alt='' className='Fav_img'></img>
          <div className='Fav__description'>
            <icon></icon>
            <h1>Name</h1>
            <h3>March 25, 2022</h3>
            <text>sdafghvcl;ieurfhdgvciu;eqwdhsbvciueqhwbscv</text>
            <div className='Fav__control'>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
