import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
  return (
    <nav className="nav">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/chips">
        Chips
      </NavLink>
      <NavLink exact to="/soda">
        Soda
      </NavLink>
      <NavLink exact to="/candy">
        Candy
      </NavLink>
    </nav>
  );
};

export default NavBar;
