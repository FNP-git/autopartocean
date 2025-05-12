import React from 'react';
import './Homepg.css';
import Form from '../components/Form';
import Services from '../pages/Services';
import Provide from '../pages/Provide';
import Testimonials from '../pages/Testimonials';
import ContactUs from '../pages/ContactUs';
import Popup from '../components/Popup';
import Brands from './Brands';
import CallButton from '../components/CallButton';
import dmca from '../assets/dmca.png';
import useScrollAnimate from '../hooks/useScrollAnimate'; 

const Homepg = () => {
  useScrollAnimate(['.fade-up', '.slide-left', '.slide-right', '.zoom-in']);

  return (
    <>
    <Popup />
     {/* Slider */}
     <div className="slider">
        <div className="slider-track">
          <div className="item2">WORLDWIDE FREE SHIPPING</div>
          <div className="item">24/7 SUPPORT</div>
          <div className="item2">EXTENDED WARRANTY</div>
          <div className="item">BBB ACCREDITED</div>
          <div className="item2">WORLDWIDE FREE SHIPPING</div>
          <div className="item">24/7 SUPPORT</div>
          <div className="item2">A+ RATING</div>
          <div className="item">EXTENDED WARRANTY</div>
          <div className="item2">BBB ACCREDITED</div>
          <div className="item">A+ RATING</div>
          <div className="item2">WORLDWIDE FREE SHIPPING</div>
          <div className="item">24/7 SUPPORT</div>
          <div className="item2">EXTENDED WARRANTY</div>
          <div className="item">BBB ACCREDITED</div>
          <div className="item2">WORLDWIDE FREE SHIPPING</div>
          <div className="item">24/7 SUPPORT</div>
          <div className="item2">A+ RATING</div>
          <div className="item">EXTENDED WARRANTY</div>
          <div className="item2">BBB ACCREDITED</div>
          <div className="item2">WORLDWIDE FREE SHIPPING</div>
          <div className="item">24/7 SUPPORT</div>
          <div className="item2">A+ RATING</div>
          <div className="item">EXTENDED WARRANTY</div>
          <div className="item2">BBB ACCREDITED</div>
          
        </div>
      </div>
      {/* Original Home Page Content */}
      <div id="home">
        
        <div id="left" className="fade-up">
  <h3 id='wlcm'>WELCOME TO</h3>
  <h1 id='txt'>AUTO<span id='part'>PART</span>OCEAN</h1>
          <h5 className='para'>At AutoParts Ocean, we bring your car back to life with <span className='imp'>top-quality used engines, transmissions, and small parts</span>. Every part is tested for performance, reliability, and longevity, <span className='imp'>delivered straight to your doorstep with free shipping!</span> Drive with confidence, knowing you’re getting the best for less.</h5>
          <div id="cl-dmca">
          <a href="tel:+1-888-819-5651">
          <button className='submit'><span className="submit-text">Call Now</span></button>
          </a>
          <a href="https://www.dmca.com/Protection/Status.aspx?ID=2adc4b2f-3d66-4b9b-9cf1-350789652c71&refurl=https://autopartocean.com/" target="_blank" rel="noopener noreferrer">
            <img id='dmca' src={dmca} alt="dmca verified" loading='lazy' />
          </a>
          </div>
        </div>
        <div id="rght" className="fade-up">
  <Form />
</div>

      </div>

      {/* Static Sections from App.jsx (now only on Home Page) */}
      <Services />
      <Provide />
      <Brands />
      <CallButton />
      <Testimonials />
      
    </>
  );
};

export default Homepg;
