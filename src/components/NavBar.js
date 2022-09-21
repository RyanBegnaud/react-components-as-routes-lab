import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink
        to="/"
        activeStyle={{
          background: "darkblue",
        }}
        >
          Home
        </NavLink>
        <NavLink
        to="/movies"
        activeStyle={{
          background: "yellow",
        }}
        >
          Movies
        </NavLink>
        <NavLink
        to="/directors"
        activeStyle={{
          background: "red",
        }}
        >
          Directors
        </NavLink>
        <NavLink
        to="/actors"
        activeStyle={{
          background: "blue",
        }}
        >
          Actors
        </NavLink>
        
    </div>
  );
};

export default NavBar;
