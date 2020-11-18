import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { decode } from 'jsonwebtoken';
import { ClipLoader } from 'react-spinners';
import useLocalStorage from './hooks/useLocalStorage';
import NavBar from './components/NavBar';
import Routes from './components/Routes';
import './App.css';
import JoblyAPI from './JoblyAPI';
import UserContext from './UserContext';

export const TOKEN_STORAGE_ID = 'jobly-token';

const App = () => {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  useEffect(() => {
    async function getCurrentUser() {
      try {
        let { username } = decode(token);
        let currentUser = await JoblyAPI.getCurrentUser(username);
        setCurrentUser(currentUser);
      } catch (error) {
        setCurrentUser(null);
      }
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  const handleLogout = () => {
    setCurrentUser(null);
    setToken(null);
  };

  if (!infoLoaded) {
    return <ClipLoader size={150} color="green" />;
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div className="App">
          <NavBar logout={handleLogout} />
          <Routes setToken={setToken} />
        </div>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
