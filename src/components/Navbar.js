import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/church">Church</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/localtalent">Talent</Link>
      <Link to="/nitelife">NiteLife</Link>
      <Link to="/credits">Credits</Link>
    </nav>
  );
}

export default NavBar;
