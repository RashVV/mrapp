import React, { useState } from 'react';
import './Header.css';
import { ReactComponent as CloseMenu } from './../../image/x.svg';
import { ReactComponent as MenuIcon } from './../../image/menu.svg';
import LoginBtn from './LoginBtn';
import { SearchBox } from './SearchBox';
import logo from '../../image/logo.png';
import MenuPopups from './MenuPopups';

function Header( ) {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMenu = () => setIsMenuActive(!isMenuActive);
  const closeMobileMenu = () => setIsMenuActive(false);
  return (
    <div className='container'>
      <div className='logo-nav'>
        <div className='Logo'>
          <p>
            <a href='/' >
              <img className='logo' src={logo} alt='MovieRoom App' />
            </a>
          </p>
        </div> 
        <ul className={isMenuActive ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}> 
            <div className='nav__menu'>
              <MenuPopups /> 
            </div>
          </li>
          <li className="option" onClick={toggleMenu}>
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
        <div className="mobile-menu" onClick={toggleMenu}>
          {toggleMenu ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
