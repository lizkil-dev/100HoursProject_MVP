import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ElSalvador from './pages/ElSalvador';
import Finland from './pages/Finland';
import Guatemala from './pages/Guatemala';
import Belize from './pages/Belize';
import NoMatch from './pages/NoMatch';
import Footer from './components/Footer';


function App() {

  return (
    <>    
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/photos/elsalvador" element={<ElSalvador />} />
        <Route path="/photos/finland" element={<Finland />} />
        <Route path="/photos/guatemala" element={<Guatemala />} />
        <Route path="/photos/belize" element={<Belize />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
