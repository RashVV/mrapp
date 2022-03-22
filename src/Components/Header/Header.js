import React, { useState } from 'react';
import './Header.css';
import { ReactComponent as CloseMenu } from './../../image/x.svg';
import { ReactComponent as MenuIcon } from './../../image/menu.svg';
import LoginBtn from './LoginBtn';
import { SearchBox } from './SearchBox';
import logo from '../../image/logo.png';
import MenuPopups from './MenuPopups';

function Header( ) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
   <div className='container'>
     <div className='logo-nav'>
        <div className='Logo'>
          <p>
            <a href='/' >
              <img src={logo} alt='MovieRoom App' />
            </a>
          </p>
        </div> 
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}> 
              <div className='nav__menu'>
                 <MenuPopups /> 
              </div>
          </li>
          <li className="option" onClick={handleClick}>
            <div>
              <SearchBox />
            </div>
          </li>
          <li className="sign-in" onClick={closeMobileMenu}>
            <div className='button'>
              <LoginBtn />
            </div>
          </li>
        </ul>  
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
              ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
