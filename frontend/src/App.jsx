import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Homepg';
import Transmission from './pages/Transmission';
import Engine from './pages/Engine';
import About from './pages/About';
import TnC from './pages/TnC';
import Rtrn from './pages/Rtrn';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <>
      <Header />
      <Navbar />

      {/* Routes for dynamic pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transmission" element={<Transmission />} />
        <Route path="/engine" element={<Engine />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms-conditions" element={<TnC />} />
        <Route path="/return-policy" element={<Rtrn />} />
      </Routes>
      <ContactUs/>
      <Footer />
    </>
  );
};

export default App;
