import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Reset from "./Components/Reset/Reset";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
