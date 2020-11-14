import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Home />
      </BrowserRouter> 
    </div>
  );
}

export default App;
