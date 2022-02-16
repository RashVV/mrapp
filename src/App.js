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
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

/*componentDidMount() {
  const db = firebase.database();
  console.log(db)
};*/

function App() {
  React.useEffect(() => {
    //const db = firebase.database();
    //console.log(db)
  }, []);
  return (
    <div id="container">
  <div id="one">
  <p><a href="/" style={{color: "white" }} >MovieRoom App</a></p>
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
