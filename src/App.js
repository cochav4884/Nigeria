import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Church from './Pages/Church';
import Contact from './Pages/Contact';
import Credits from './Pages/Credits';
import LocalTalent from './Pages/LocalTalent';
import NiteLife from './Pages/NiteLife';

function App() {
  return (
    <Router>
      <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/church">Church</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/localtalent">Talent</Link>
        <Link to="/nitelife">NiteLife</Link>
        <Link to="/credits">Credits</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/church" element={<Church />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/localtalent" element={<LocalTalent />} />
        <Route path="/nitelife" element={<NiteLife />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>
    </Router>
  );
}

export default App;
