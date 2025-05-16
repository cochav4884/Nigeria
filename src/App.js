import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Church from "./Pages/Church";
import Contact from "./Pages/Contact";
import Credits from "./Pages/Credits";
import LocalTalent from "./Pages/LocalTalent";
import NiteLife from "./Pages/NiteLife";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Residents from "./Pages/Residents";
import TermsOfUse from "./Pages/TermsOfUse";

import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <nav>
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
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
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/church" onClick={() => setMenuOpen(false)}>
            Church
          </NavLink>
          <NavLink to="/localtalent" onClick={() => setMenuOpen(false)}>
            Talent
          </NavLink>
          <NavLink to="/nitelife" onClick={() => setMenuOpen(false)}>
            NiteLife
          </NavLink>
          <NavLink to="/residents" onClick={() => setMenuOpen(false)}>
            Residents
          </NavLink>

          <div className={`dropdown ${menuOpen ? "active" : ""}`}>
            <button
              className="dropbtn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-haspopup="true"
              aria-expanded={menuOpen}
            >
              More
            </button>
            <div className="dropdown-content">
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>
              <NavLink to="/credits" onClick={() => setMenuOpen(false)}>
                Credits
              </NavLink>
              <NavLink to="/privacypolicy" onClick={() => setMenuOpen(false)}>
                Privacy Policy
              </NavLink>
              <NavLink to="/termsofuse" onClick={() => setMenuOpen(false)}>
                Terms of Use
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/church" element={<Church />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/localtalent" element={<LocalTalent />} />
          <Route path="/nitelife" element={<NiteLife />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/residents" element={<Residents />} />
          <Route path="/termsofuse" element={<TermsOfUse />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
