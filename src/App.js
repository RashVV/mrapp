import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './сomponents/Login/Login';
import Register from './сomponents/Register/Register';
import Reset from './сomponents/Reset/Reset';
import Dashboard from './сomponents/Dashboard/Dashboard';
import Favorites from './pages/Favorites';
import Friends from './pages/Friends';
import Allmovies from './pages/Allmovies';
import Collections from './pages/Collections';
import Inthemovies from './pages/Inthemovies';
import Mycalendars from './pages/Mycalendars';
import Myseries from './pages/Myseries';
import News from './pages/News';
import Online from './pages/Online';
import Popular from './pages/Popular';
import Premieres from './pages/Premieres';
import Recommendations from './pages/Recommendations';
import Reviews from './pages/Reviews';
import Searchbyname from './pages/Searchbyname';
import Soon from './pages/Soon';
import Tape from './pages/Tape';
import Trailers from './pages/Trailers';
import TVseries from './pages/TVseries';
import Videos from './pages/Videos';
import Header from './сomponents/Header/Header';
import Footer from "./layout/footer";
import {MoviesPage} from "./pages/moviesPage";
import {PopularMovies} from "./pages/popularMovies";
import {DetailPage} from "./pages/detailPage";

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
        <Route exact path='/R2D2' element={<Allmovies />} />
        <Route exact path='/collections/moviroomapp' element={<Collections />} />
        <Route exact path='/movies/cinema' element={<Inthemovies />} />
        <Route exact path='/shows/calendar' element={<Mycalendars />} />
        <Route exact path='/shows/my' element={<Myseries />} />
        <Route exact path='/news' element={<News />} />
        <Route exact path='/movies/online' element={<Online />} />
        <Route exact path='/shows/popular' element={<Popular />} />
        <Route exact path='/movies' element={<Premieres />} />
        <Route exact path='/recommendations/movies' element={<Recommendations />} />
        <Route exact path='/videos/favorites' element={<Reviews />} />
        <Route exact path='/search/names' element={<Searchbyname />} />
        <Route exact path='/movies/premier' element={<Soon />} />
        <Route exact path='/feed' element={<Tape />} />
        <Route exact path='/videos/trailers' element={<Trailers />} />
        <Route exact path='/shows' element={<TVseries />} />
        <Route exact path='/videos' element={<Videos />} />
        <Route exact path='/feed/favorites' element={<Favorites />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/reset' element={<Reset />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/movieDetail/:id' element={<DetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
