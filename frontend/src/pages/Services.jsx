import React from 'react'
import useScrollAnimate from '../hooks/useScrollAnimate';

import './Services.css'
import L1 from '../assets/engine.svg'
import L2 from '../assets/transmission.svg'
import L3 from '../assets/installation.svg'

import eng1 from '../assets/eng1.jpg'

const Services = () => {
  useScrollAnimate(['.fade-up', '.slide-left', '.slide-right', '.zoom-in']);

  return (
    <>
    <div className="service-main">
  {/* Left Section */}
  <div id="serv-left" className="fade-up">
    <div id="scam">
  <h1 id="scm-hd">AMERICA'S TRUSTED <span id="scm">AUTO PARTS</span> SUPPLIER</h1>
  <h3 id="prtct">Quality-Tested Engines & Transmissions with Nationwide Delivery. Experience the Difference of Professional Service</h3>
  <h4 id="prtct">We connect you with 1,000+ inventory yards nationwide, offering quality-tested used engines and transmissions with warranty protection. Every part is inspected, tested, and delivered to your doorstep with <span id="scn">AutoPartOcean's</span> commitment to excellence</h4>
</div>
  </div>

  {/* Right Section */}
  <div id="serv-right" className="fade-up">
    <div id="semi-head">
      <h1 id="srv" className="fade-up"> <span id="check">CHECK OUT </span>OUR SERVICES</h1>
    </div>
    <p id="serpara" className="fade-up">
      At AutoPartOcean, we offer a wide range of services to meet your auto parts needs.
      Explore our collection of <span id="parts"> used engines, transmissions and small-parts </span> for every car make and model.
      We ensure top quality and reliable performance for your vehicle.
    </p>
    <div id="serv-menu" className="zoom-in">
      <h2 id="srvc">
        <img id="servlogo" src={L1} alt="Used Engine" loading="lazy" /> Used Engine
      </h2>
      <h2 id="srvc">
        <img id="servlogo" src={L2} alt="Used Transmission" loading="lazy" /> Used Transmission
      </h2>
      <h2 id="srvc">
        <img id="servlogo" src={L3} alt="Installation" loading="lazy" />New Engine and Transmission
      </h2>
    </div>
  </div>
</div>

    </>
  )
}

export default Services
