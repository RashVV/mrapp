import React from 'react';
import './Header.css';
import LoginBtn from './LoginBtn';
import { SearchBox } from './SearchBox';
import logo from '../../image/logo.png';
import MenuButton from './MenuButton';





function Header( ) {
    return (
   <div id='container'>
        <div id='one'>
         <p>
          <a href='/' ><img src={logo} alt='MovieRoom App' width='80px' height='80px'/></a>
         </p>
        </div> 
        <div className='two' >
         <MenuButton />
        </div>
        <div id='nine'>
         <SearchBox />
        </div>
        <div id='ten'>
         <LoginBtn />
       </div>
    </div>
  )
}

export default Header
