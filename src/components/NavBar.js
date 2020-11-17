import { useContext } from 'react';
import { Navbar, Nav, NavItem } from "reactstrap";
import { NavLink, Link } from 'react-router-dom';
import '../styles/NavBar.css';
import UserContext from '../UserContext';

const NavBar = ({ logout }) => {
  const {currentUser} = useContext(UserContext);

  const loggedInNav = () => {
    return (
        <>
          <NavItem className="mr-4">
            <NavLink to="/companies">Companies</NavLink>
          </NavItem>
          <NavItem className="mr-4">
            <NavLink to="/jobs">Jobs</NavLink>
          </NavItem>
          <NavItem className="mr-4">
            <NavLink to="/profile">Profile</NavLink>
          </NavItem>
          <NavLink className="nav-link" to="/" onClick={logout}>Log out</NavLink>
        </>
        
        
    );
  }

  const loggedOutNav = () => {
    return (
      <>
        <NavItem className="mr-4">
          <NavLink to="/login">
            Login
          </NavLink>
        </NavItem>
      </> 
    );
  }

  return (
    <Navbar className="mb-4">
      <NavLink exact to="/" className="navbar-brand">
        Jobly
      </NavLink>
      {loggedInNav()}
      {/* {currentUser ? loggedInNav() : loggedOutNav()} */}
    </Navbar>
  );
}

export default NavBar;