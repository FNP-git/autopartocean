import React from 'react';
import './SliderOne.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SliderOne = ({ images, onImageClick }) => {
  const handleLinkClick = (e) => {
    // Scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Call the onImageClick function if provided
    onImageClick(e);
  };

  return (
    <div 
      className="slider slider-one"
      style={{
        '--width': '200px',
        '--height': '200px',
        '--quantity': images.length,
      }}
    >
      <div className="list">
        {images.map((item, index) => (
          <div
            className="item"
            style={{ '--position': index + 1 }}
            key={index}
          >
            {/* Wrap the whole item inside a Link tag */}
            <Link 
              to="/engine" // You can specify the destination URL if needed
              onClick={(e) => handleLinkClick(e)} // Scroll to the top and handle click
              className="slider-link"
            >
              <img src={item.src} alt={item.brandName} className='oneimg' />
            </Link>
              <p className='onepara'>Used {item.brandName} Engines <br /> Transmission</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderOne;
