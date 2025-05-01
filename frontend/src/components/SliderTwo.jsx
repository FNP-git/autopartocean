import React from 'react';
import './SliderTwo.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SliderTwo = ({ images, onImageClick }) => {
  const handleLinkClick = (e) => {
    // Scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Call the onImageClick function if provided (optional)
    if (onImageClick) {
      onImageClick(e);
    }
  };

  return (
    <div
      className="slider slider-two"
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
              to="/engine" // This will navigate to the top of the homepage or any other route
              onClick={handleLinkClick} // Scroll to the top and handle the click
              className="slider-link"
            >
              <img src={item.src} alt={item.brandName} className='twoimg' loading='lazy' />
            </Link>
              <p className='twopara'>Used {item.brandName} <br /> Engines Transmission</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderTwo;
