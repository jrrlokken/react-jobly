import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/NavBar.css';
import UserContext from '../UserContext';

const NavBar = ({ logout }) => {
  const {currentUser} = useContext(UserContext);

  const loggedInNav = () => {
    return (
      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/companies">Companies</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={logout}>Log Out</Link>
          </li>
        </ul>
      </div>  
    );
  }

  const loggedOutNav = () => {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    );
  }

  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <Link className="navbar-brand" to="/">Jobly</Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarToggler" 
        aria-controls="navbarToggler" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {currentUser ? loggedInNav() : loggedOutNav()}
    </nav>
  );
}

export default NavBar;