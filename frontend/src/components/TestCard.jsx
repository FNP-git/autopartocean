import React from "react";
import "./TestCard.css";

const TestCard = ({ text }) => {
  return (
    <div className="test-card">
      <span className="quote">❝</span>
      <p className="test-text">{text}</p>
    </div>
  );
};

export default TestCard;
