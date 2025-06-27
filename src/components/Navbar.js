import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";
import { FaHome, FaInfoCircle, FaChurch, FaMicrophone, FaMoon, FaUsers, FaPlaneDeparture } from "react-icons/fa";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = { marginLeft: "6px", verticalAlign: "middle" };

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
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>
          <FaHome /> <span style={linkStyle}>Home</span>
        </NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>
          <FaInfoCircle /> <span style={linkStyle}>About</span>
        </NavLink>
        <NavLink to="/church" onClick={() => setMenuOpen(false)}>
          <FaChurch /> <span style={linkStyle}>Church</span>
        </NavLink>
        <NavLink to="/localtalent" onClick={() => setMenuOpen(false)}>
          <FaMicrophone /> <span style={linkStyle}>Local Talent</span>
        </NavLink>
        <NavLink to="/nitelife" onClick={() => setMenuOpen(false)}>
          <FaMoon /> <span style={linkStyle}>NiteLife</span>
        </NavLink>
        <NavLink to="/residents" onClick={() => setMenuOpen(false)}>
          <FaUsers /> <span style={linkStyle}>Residents</span>
        </NavLink>
        <NavLink to="/travel" onClick={() => setMenuOpen(false)}>
          <FaPlaneDeparture /> <span style={linkStyle}>Travel</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
