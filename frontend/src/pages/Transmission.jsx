import React from 'react';
import Form from '../components/Form';
import './Transmission.css';

const Transmission = () => {
  return (
    <div className="transmission">
      <div className="trans-left">
        <div id="trans-title">
          <h1 className='th1'>Used <span id='trans-head'>Transmission</span></h1>
        </div>
        <div id="trans-content">
          <h2 className='th2'>
            Are you in need of a dependable and budget-friendly used transmission for your car? Whether you’re looking for a manual transmission or automatic transmission, we provide top-quality used transmissions for a wide variety of car brands.
          </h2>
          <p className='trans-para'>
            Our transmissions are thoroughly inspected, ensuring they meet high standards of performance and durability. At FNP AutoParts, we offer used transmissions for many makes and models, all at affordable prices to get your vehicle back on the road quickly.
          </p>
          <a href="tel:+1-888-819-5651">
            <button className='trans-submit'>Call Now</button>
          </a>
        </div>
      </div>
      <div className="trans-right">
        <Form />
      </div>
    </div>
  );
};

export default Transmission;
