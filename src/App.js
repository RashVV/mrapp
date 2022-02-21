import './App.css';
import useAxios from "./hooks/axios.hook";
import {Routes, Route} from "react-router-dom"
import {AuthPage} from "./pages/authPage";
import {MainPage} from "./pages/mainPage";
import {MoviesPage} from "./pages/moviesPage";

function App() {
  // Example usage
  // const {response} = useAxios({url:'/network/1',method: 'get'})
  return (
    <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<AuthPage/>}/>
        <Route path="/movies" element={<MoviesPage/>}/>
    </Routes>
  );
}

export default App;
