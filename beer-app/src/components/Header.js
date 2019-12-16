import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/about">About</Link>
        </nav>
      </header>
  )
}

export default Header;