import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div id="nav">
      <div className="nav-menu">
        <NavLink to="/" className="hm" onClick={() => setDropdownVisible(false)}>Home</NavLink>
        <NavLink to="/transmission" className="hm" onClick={() => setDropdownVisible(false)}>Used Transmission</NavLink>
        <NavLink to="/engine" className="hm" onClick={() => setDropdownVisible(false)}>Used Engines</NavLink>
        <NavLink to="/about" className="hm" onClick={() => setDropdownVisible(false)}>About</NavLink>

        {/* More with Dropdown */}
        <div className={`dropdown ${dropdownVisible ? "active" : ""}`}>
          <h4 className="dropdown-title" onClick={toggleDropdown}>More</h4>
          {dropdownVisible && (
            <div className="dropdown-menu">
              <NavLink to="/terms-conditions" className="itm" onClick={() => setDropdownVisible(false)}>
                Warranty Terms & Conditions
              </NavLink>
              <NavLink to="/return-policy" className="itm" onClick={() => setDropdownVisible(false)}>
                Return & Cancellation Policy
              </NavLink>
            </div>
          )}
        </div>
      </div>
      <HamburgerMenu />
    </div>
  );
};

export default Navbar;
