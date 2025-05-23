import React from 'react';
import './MatrixLoader.css';
import imj1 from '../assets/imj1.svg';
import imj2 from '../assets/imj2.svg';
import imj3 from '../assets/imj3.svg';
import imj4 from '../assets/imj4.svg';

const MatrixLoader = () => {
  return (
    <div className="apo-loader">
      <div className="apo-pattern">
        {Array.from({ length: 400 }).map((_, i) => (
          <span key={i}>APO</span>
        ))}
      </div>
      <div className="apo-overlay"></div>
      <div className="apo-center">
        <h1 className="apo-title">AUTO PART OCEAN</h1>
        <h3 className="apo-sub">Used, Reman & Rebuilt Engines & Transmissions</h3>

        <div className="apo-image-slider">
  <div className="apo-image-track">
    <img src={imj1} alt="img1" />
    <img src={imj2} alt="img2" />
    <img src={imj3} alt="img3" />
    <img src={imj4} alt="img4" />
    {/* Duplicate for seamless scroll */}
    <img src={imj1} alt="img1" />
    <img src={imj2} alt="img2" />
    <img src={imj3} alt="img3" />
    <img src={imj4} alt="img4" />
    
  </div>
</div>



        <div className="apo-progress-bar">
          <div className="apo-progress-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default MatrixLoader;
