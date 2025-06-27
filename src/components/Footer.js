// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
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
          Creator: <Link to="/corinne">Corinne Padilla</Link>
        </p>
        <p className="date">
          Photographer: <Link to="/richie">Richie Osborne</Link>
        </p>
        <p className="date">
          Pastor: <Link to="/amos">Amos Onogwu</Link>
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
        <Link to="/privacypolicy">Privacy Policy</Link> |{" "}
        <Link to="/termsofuse">Terms of Use</Link> |{" "}
        <Link to="/credits">Credits & Copyrights</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </div>

      <div className="footer-image-container">
        <img src={lookingOut} alt="Looking out from the church building" />
      </div>
    </footer>
  );
}

export default Footer;
