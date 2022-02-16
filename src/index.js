import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBsv1HjgkHy75CPKqYQvKsdmHZqo-R-3sw",
  authDomain: "movie-room-app.firebaseapp.com",
  databaseURL: "https://movie-room-app-default-rtdb.firebaseio.com",
  projectId: "movie-room-app",
  storageBucket: "movie-room-app.appspot.com",
  messagingSenderId: "873323191925",
  appId: "1:873323191925:web:a1798269fbe0720181a23c",
  measurementId: "G-C6MPM29FT4"
};

firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);
console.log(database);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
