import React from 'react';
import './App.css';
import LoginBtn from './Components/LoginBtn';
import Menu0 from './Components/Menu0';
import Menu1 from './Components/Menu1';
import Menu2 from './Components/Menu2';
import Menu3 from './Components/Menu3';
import Menu4 from './Components/Menu4';
import Menu5 from './Components/Menu5';
import SearchBox from './Components/SearchBox';
import logo from './image/logo.png'



function App() {
  React.useEffect(() => {
    
  }, []);
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
      
  );
}

export default App;
