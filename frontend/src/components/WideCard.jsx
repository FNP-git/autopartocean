import React from 'react';
import './WideCard.css';

const WideCard = ({ parts }) => {
  return (
    <div className="wide-card">
      <h3 className="card-text">{parts}</h3>
    </div>
  );
};

export default WideCard;
