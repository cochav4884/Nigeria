import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
import Corinne from "./Pages/Corinne";
import Richie from "./Pages/Richie";
import Amos from "./Pages/Amos";
import Travel from "./Pages/Travel";

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />

      <div className="app-content">
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
            <Route path="/corinne" element={<Corinne />} />
            <Route path="/richie" element= {<Richie />} />
            <Route path="/amos" element={<Amos />} />
            <Route path="/travel" element={<Travel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
