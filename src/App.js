import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Reset from './Components/Reset/Reset';
import Dashboard from './Components/Dashboard/Dashboard';
import Favorites from './authPages/Favorites';
import Friends from './authPages/Friends';
import AllMovies from './Pages/AllMovies';
import Collections from './authPages/Collections';
import IntheMovies from './Pages/IntheMovies';
import MyCalendars from './Pages/MyCalendars';
import MySeries from './Pages/MySeries';
import News from './authPages/News';
import Online from './authPages/Online';
import Popular from './authPages/Popular';
import Premieres from './authPages/Premieres';
import Recommendations from './authPages/Recommendations';
import Reviews from './authPages/Reviews';
import SearchbyName from './Pages/SearchbyName';
import Soon from './authPages/Soon';
import Tape from './authPages/Tape';
import Trailers from './authPages/Trailers';
import TVSeries from './Pages/TVSeries';
import Videos from './authPages/Videos';
import Header from './Components/Header/Header';
import Footer from "./layout/footer";
import {MoviesPage} from "./authPages/moviesPage";
import {PopularMovies} from "./authPages/popularMovies";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<div>Home</div>} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path="/popularMovies" element={<PopularMovies/>} />
        <Route exact path="/movies" element={<MoviesPage/>}/>
        <Route exact path='/feed/friends' element={<Friends />} />
        <Route exact path='/R2D2' element={<AllMovies />} />
        <Route exact path='/collections/moviroomapp' element={<Collections />} /> 
        <Route exact path='/movies/cinema' element={<IntheMovies />} />
        <Route exact path='/shows/calendar' element={<MyCalendars />} />
        <Route exact path='/shows/my' element={<MySeries />} />
        <Route exact path='/news' element={<News />} />
        <Route exact path='/movies/online' element={<Online />} />
        <Route exact path='/shows/popular' element={<Popular />} />
        <Route exact path='/movies' element={<Premieres />} />
        <Route exact path='/recommendations/movies' element={<Recommendations />} />
        <Route exact path='/videos/favorites' element={<Reviews />} />
        <Route exact path='/search/names' element={<SearchbyName />} />
        <Route exact path='/movies/premier' element={<Soon />} />
        <Route exact path='/feed' element={<Tape />} />
        <Route exact path='/videos/trailers' element={<Trailers />} />
        <Route exact path='/shows' element={<TVSeries />} />
        <Route exact path='/videos' element={<Videos />} />       
        <Route exact path='/feed/favorites' element={<Favorites />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/reset' element={<Reset />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
