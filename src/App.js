import './App.css';
import Menu0 from './Components/Menu0';
import Menu1 from './Components/Menu1';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <p>MovieRoom App</p>
      <NavBar />
      <Menu0/>
      <Menu1 />
    </div>
  );
}

export default App;
