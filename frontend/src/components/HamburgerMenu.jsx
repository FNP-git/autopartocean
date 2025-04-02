import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./HamburgerMenu.css";
import Logo from  "../assets/ocean_logo.png"

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        ☰
      </div>

      {/* Full-screen menu */}
      <div className={`menu-overlay ${isOpen ? "open" : ""}`} onClick={closeMenu}>
        <div className="menu-content" onClick={(e) => e.stopPropagation()}>
          <img id="lgo" src={Logo} alt="hamburger menu icon" />
          <button className="close-btn" onClick={closeMenu}>✖</button>
          <ul id="elm">
            <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/transmission" onClick={closeMenu}>Used Transmission</NavLink></li>
            <li><NavLink to="/engine" onClick={closeMenu}>Used Engines</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
            <li><NavLink to="/terms-conditions" onClick={closeMenu}>Warranty Terms & Conditions</NavLink></li>
            <li><NavLink to="/return-policy" onClick={closeMenu}>Return & Cancellation Policy</NavLink></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
