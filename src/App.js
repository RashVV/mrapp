import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Reset from './components/Reset/Reset';
import Dashboard from './components/Dashboard/Dashboard';
import Favorites from './pages/Favorites';
import Friends from './pages/Friends';
import Collections from './pages/Collections';
import InTheMovies from './pages/InTheMovies';
import AllMovies from './pages/AllMovies';
import MyCalendars from './pages/MyCalendars';
import MySeries from './pages/MySeries';
import News from './pages/News';
import Online from './pages/Online';
import Popular from './pages/Popular';
import Premieres from './pages/Premieres';
import Recommendations from './pages/Recommendations';
import Reviews from './pages/Reviews';
import SearchByName from './pages/SearchByName';
import Soon from './pages/Soon';
import Tape from './pages/Tape';
import Trailers from './pages/Trailers';
import TVSeries from './pages/TVSeries';
import Videos from './pages/Videos';
import Header from './components/Header/Header';
import Footer from "./layout/footer";
import {MoviesPage} from "./pages/MoviesPage";
import {PopularMovies} from "./pages/PopularMovies";
import {DetailPage} from "./pages/detailPage";
import {MainPage} from "./pages/mainPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path="/popularMovies" element={<PopularMovies/>} />
        <Route exact path="/movies" element={<MoviesPage/>}/>
        <Route exact path='/feed/friends' element={<Friends />} />
        <Route exact path='/R2D2' element={<AllMovies />} />
        <Route exact path='/collections/moviroomapp' element={<Collections />} />
        <Route exact path='/movies/cinema' element={<InTheMovies />} />
        <Route exact path='/shows/calendar' element={<MyCalendars />} />
        <Route exact path='/shows/my' element={<MySeries />} />
        <Route exact path='/news' element={<News />} />
        <Route exact path='/movies/online' element={<Online />} />
        <Route exact path='/shows/popular' element={<Popular />} />
        <Route exact path='/movies' element={<Premieres />} />
        <Route exact path='/recommendations/movies' element={<Recommendations />} />
        <Route exact path='/videos/favorites' element={<Reviews />} />
        <Route exact path='/search/names' element={<SearchByName />} />
        <Route exact path='/movies/premier' element={<Soon />} />
        <Route exact path='/feed' element={<Tape />} />
        <Route exact path='/videos/trailers' element={<Trailers />} />
        <Route exact path='/shows' element={<TVSeries />} />
        <Route exact path='/videos' element={<Videos />} />
        <Route exact path='/feed/favorites' element={<Favorites />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/reset' element={<Reset />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route path='/movie/:id' element={<DetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
