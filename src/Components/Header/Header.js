import React from 'react';
import './Header.css';
import LoginBtn from './LoginBtn';
import { SearchBox } from './SearchBox';
import logo from '../../image/logo.png';
import MenuPopups from './MenuPopups';

function Header( ) {
  return (
   <div className='container'>
      <div className='one'>
        <p>
          <a href='/' >
            <img src={logo} alt='MovieRoom App' width='80px' height='80px'/>
          </a>
        </p>
      </div> 
      <div className='two' >
        <MenuPopups /> 
      </div>
      <div>
        <SearchBox />
      </div>
      <div>
        <LoginBtn />
      </div>
    </div>
  )
}

export default Header
