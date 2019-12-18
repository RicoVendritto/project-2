import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/searchOptions">Search</Link>
        <Link to="/favourites">Favourites</Link>
        </nav>
      </header>
  )
}

export default Header;