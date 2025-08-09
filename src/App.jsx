import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/hero.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Projects from './pages/projects.jsx';

function HotjarTracker() {
  const location = useLocation();
  useEffect(() => {
    if (window.hj) {
      window.hj('stateChange', location.pathname);
      // console.log('Hotjar page view:', location.pathname);
    }
  }, [location]);
  return null; // dit rendert niets
}

function App() {
  return (
    <Router>
      {/* 🔸 Hook staat nu BINNEN de Router */}
      <HotjarTracker />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
