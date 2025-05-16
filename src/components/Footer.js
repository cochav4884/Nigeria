// src/components/Footer.js
import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Footer.css"; // optional CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Your App Name. All rights reserved.</p>
        <div className="footer-links">
          <NavLink to="/privacypolicy">Privacy Policy</NavLink>
          <NavLink to="/termsofuse">Terms of Use</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
