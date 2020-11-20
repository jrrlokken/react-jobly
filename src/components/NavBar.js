import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/NavBar.css';
import UserContext from '../UserContext';

const NavBar = ({ logout }) => {
  const {currentUser} = useContext(UserContext);

  const loggedInNav = () => {
    return (
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
    <nav className="navbar navbar-expand-md">
      <Link className="navbar-brand" to="/">Jobly</Link>
      {currentUser ? loggedInNav() : loggedOutNav()}
    </nav>
  );
}

export default NavBar;