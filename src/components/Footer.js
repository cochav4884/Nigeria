// src/components/Footer.js
import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Footer.css";
import lookingOut from "../images/looking_out_bw2.jpg";

function Footer() {
  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="date">&copy; {new Date().getFullYear()} | MFCP & ROC</p>
        <p className="date">
          Creator: <NavLink to="/cp">Corinne Padilla</NavLink>
        </p>
        <p className="date">
          Photographer: <NavLink to="/roc">Richie Osborne</NavLink>
        </p>
        <p className="date">
          Pastor: <NavLink to="/pastor">Amos Onogwu</NavLink>
        </p>
        <p className="date">All rights reserved.</p>
      </div>
      <button
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑ Back to Top
      </button>

      <div className="footer-nav">
        <NavLink to="/privacypolicy">Privacy Policy</NavLink> |{" "}
        <NavLink to="/termsofuse">Terms of Use</NavLink> |{" "}
        <NavLink to="/credits">Credits</NavLink> |{" "}
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <div className="footer-image-container">
        <img src={lookingOut} alt="Looking out from the church building" />
      </div>
    </footer>
  );
}

export default Footer;
