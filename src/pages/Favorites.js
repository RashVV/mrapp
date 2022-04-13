import React from 'react';
import './Favorites.css';

const MovieCounter = 4;
const TVCounter = 0;
function Favorites() {
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
    </div>
  );
}

export default Favorites;
