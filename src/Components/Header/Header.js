import React from 'react';
import './Header.css';
import LoginBtn from './LoginBtn';
import { SearchBox } from './SearchBox';
import logo from '../../image/logo.png';
import MenuPopups from './MenuPopups';

function Header( ) {
  return (
   <div className='container'>
      <div className='Logo'>
        <p>
          <a href='/' >
            <img src={logo} alt='MovieRoom App' />
          </a>
        </p>
      </div> 
      <div className='nav__menu'>
        <MenuPopups /> 
      </div>
      <div>
        <SearchBox />
      </div>
      <div className='button'>
        <LoginBtn />
      </div>
    </div>
  )
}

export default Header
