import { useContext } from 'react';
import { Navbar, Nav, NavbarBrand, NavItem } from "reactstrap";
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';
import UserContext from '../UserContext';

const NavBar = ({ logout }) => {
  const {currentUser} = useContext(UserContext);

  const loggedInNav = () => {
    return (
        <Nav className="ml-auto">
          <NavItem>
            <NavLink to="/companies">Companies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/jobs">Jobs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/" onClick={logout}>Log Out</NavLink>
          </NavItem>
        </Nav>
    );
  }

  const loggedOutNav = () => {
    return (
      <Nav className="ml-auto">
        <NavItem>
          <NavLink to="/login">Login</NavLink>
        </NavItem>
      </Nav>
    );
  }

  return (
    <Navbar expand="md">
      <NavbarBrand href="/">Jobly</NavbarBrand>
      {/* {loggedInNav()} */}
      {currentUser ? loggedInNav() : loggedOutNav()}
    </Navbar>
  );
}

export default NavBar;