import React from 'react';
import './SmallCard.css';

const SmallCard = ({ parts }) => {
  return (
    <div className="card">
      <p className="card-text">{parts}</p>
    </div>
  );
};

export default SmallCard;
