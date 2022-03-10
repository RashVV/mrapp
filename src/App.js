import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Reset from './Components/Reset/Reset';
import Dashboard from './Components/Dashboard/Dashboard';
import Favorites from './Pages/Favorites';
import Friends from './Pages/Friends';
import Allmovies from './Pages/Allmovies';
import Collections from './Pages/Collections';
import Inthemovies from './Pages/Inthemovies';
import Mycalendars from './Pages/Mycalendars';
import Myseries from './Pages/Myseries';
import News from './Pages/News';
import Online from './Pages/Online';
import Popular from './Pages/Popular';
import Premieres from './Pages/Premieres';
import Recommendations from './Pages/Recommendations';
import Reviews from './Pages/Reviews';
import Searchbyname from './Pages/Searchbyname';
import Soon from './Pages/Soon';
import Tape from './Pages/Tape';
import Trailers from './Pages/Trailers';
import TVseries from './Pages/TVseries';
import Videos from './Pages/Videos';
import Header from './Components/Header/Header'
import Footer from "./layout/footer";
//import useAxios from "./hooks/axios.hook";

function App() {
  // Example usage
  // const {response} = useAxios({url:'/network/1',method: 'get'})
  return (
    <div>
      <Header />
        <Routes>
          <Route path='/' element={<div>Home</div>} />
          <Route exact path='/login' element={<Login />} />
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
        </Routes>
        <Footer />
    </div>
  )
};

export default App;
