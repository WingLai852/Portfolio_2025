import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/hero.jsx';
import About from './pages/about.jsx'; // Assuming you have an About component
import Contact from './pages/contact.jsx'; // Assuming you have a Contact component
import Projects from './pages/projects.jsx'; // Assuming you have a Projects component


// 🔹 Hotjar tracking hook
function useHotjarTracking() {
  const location = useLocation();

  useEffect(() => {
    if (window.hj) {
      window.hj('stateChange', location.pathname);
      console.log("Hotjar page view:", location.pathname);
    }
  }, [location]);
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
