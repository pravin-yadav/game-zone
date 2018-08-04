import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="ui three item menu">
      <Link className="item" exact to="/">
        Home
      </Link>
      <Link className="item" exact to="/games">
        Games
      </Link>
      <Link className="item" exact to="/games/newgames">
        Add New game
      </Link>
    </div>
  );
};

export default Navbar;
