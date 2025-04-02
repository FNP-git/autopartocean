import React from 'react';
import './CallButton.css';  // Import the CSS for the button
import phone from '../assets/phone.png'; // Import your phone icon

const CallButton = () => {
  return (
    <a href="tel:+18888195651" className="call-button">
      <button className="call-btn">
        <img src={phone} alt="Call Us" /> {/* Replace with your phone icon */}
      </button>
      <div className="call-text">Call Us</div> {/* Text below the button */}
    </a>
  );
};

export default CallButton;
