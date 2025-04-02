import React from 'react';
import Form from '../components/Form';
import './Engine.css';

const Engine = () => {
  return (
    <div className="engine">
      <div className="eng-left">
        <div id="eng-title">
          <h1 className='eh1'>Used <span id='eng-head'>Engine</span></h1>
        </div>
        <div id="eng-content">
          <h2 className='eh2'>
            Welcome to AutoPartOcean! We specialize in providing high-quality used engines that have been thoroughly tested for performance and reliability. Our commitment to quality ensures that you receive a product you can trust. Browse our selection and find the perfect engine for your needs today!
          </h2>
          <p className='eng-para'>
            Every engine comes with a performance guarantee, ensuring longevity and reliability. Get free shipping and hassle-free installation support when you order from us.
          </p>
          <a href="tel:+1-888-819-5651">
            <button className='eng-submit'>Call Now</button>
          </a>
        </div>
      </div>
      <div className="eng-right">
        <Form />
      </div>
    </div>
  );
};

export default Engine;