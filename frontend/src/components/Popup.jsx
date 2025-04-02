import React, { useState, useEffect } from "react";
import "./Popup.css";
import popupImage from "../assets/popimg.jpg"; // Replace with your image path

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup after 5 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // Function to close the popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="popup-overlay" onClick={handleClosePopup}>
        <div className="popup-container" onClick={(e) => e.stopPropagation()}>
          <button className="popup-close" onClick={handleClosePopup}>✖</button>
          <img src={popupImage} alt="tax season sale" className="popup-image" onClick={(e) => e.stopPropagation()} />
        </div>
      </div>
    )
  );
};

export default Popup;
