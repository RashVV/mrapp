import './App.css';
import {Routes, Route} from "react-router-dom"
import {AuthPage} from "./pages/authPage";
import {MainPage} from "./pages/mainPage";
import {MoviesPage} from "./pages/moviesPage";

function App() {
  return (
    <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<AuthPage/>}/>
        <Route path="/movies" element={<MoviesPage/>}/>
    </Routes>
  );
}

export default App;
