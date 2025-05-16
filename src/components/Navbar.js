import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        role="button"
        tabIndex={0}
        aria-label="Toggle menu"
        onKeyPress={(e) => {
          if (e.key === "Enter" || e.key === " ") setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/church" onClick={() => setMenuOpen(false)}>Church</NavLink>
        <NavLink to="/localtalent" onClick={() => setMenuOpen(false)}>Talent</NavLink>
        <NavLink to="/nitelife" onClick={() => setMenuOpen(false)}>NiteLife</NavLink>
        <NavLink to="/residents" onClick={() => setMenuOpen(false)}>Residents</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
