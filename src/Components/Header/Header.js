import React from 'react'
import LoginBtn from '../Header/LoginBtn';
import Menu0 from '../Header/Menu0';
import Menu1 from '../Header/Menu1';
import Menu2 from '../Header/Menu2';
import Menu3 from '../Header/Menu3';
import Menu4 from '../Header/Menu4';
import Menu5 from '../Header/Menu5';
import SearchBox from '../Header/SearchBox';
import logo from '../../image/logo.png'

function Header() {
    return (
        <div id="container">
  <div id="one">
  <p><a href="/" ><img src={logo} alt='MovieRoom App' width="80px" height="80px"/></a></p>
   </div>
   <div id="two">
   <Menu0 />
   </div>
   <div id="three">
   <Menu1 />
   </div>
  <div id="four">
    <Menu2 />
   </div>
  <div id="five">
  •
   </div>
   <div id="six">
     <Menu3 />
   </div>
   <div id="seven">
     <Menu4 />
   </div>
   <div id="eighth">
     <Menu5 />
   </div>
   <div id="nine">
     <SearchBox />
   </div>
   <div id="ten">
     <LoginBtn />
   </div>
</div>
    )
}

export default Header
