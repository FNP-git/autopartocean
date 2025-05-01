import React from 'react'
import './Services.css'
import L1 from '../assets/engine.svg'
import L2 from '../assets/transmission.svg'
import L3 from '../assets/installation.svg'
import eng1 from '../assets/eng1.jpg'

const Services = () => {
  return (
    <>
      <div className="service-main">
        {/* Left Section */}
        <div id="serv-left">
        
            <img src={eng1} alt="engine" className="serv-img" loading='lazy' />
            
              
        </div> {/* ✅ Closing div for serv-left */}

        {/* Right Section */}
        <div id="serv-right">
          <div id='semi-head'>
            <h4 id='check'>CHECK OUT</h4>
            <h1 id='srv'>Our Services</h1>
          </div>
          <p id='serpara'>
            At AutoPartOcean, we offer a wide range of services to meet your auto parts needs. 
            Explore our collection of <span id="parts"> used engines, transmissions and small-parts </span> for every car make and model. 
            We ensure top quality and reliable performance for your vehicle.
          </p>
          <div id="serv-menu">
            <h2 id='srvc'><img id='servlogo' src={L1} alt="Used Engine" loading='lazy' /> Used Engine</h2>
            <h2 id='srvc'><img id='servlogo' src={L2} alt="Used Transmission" loading='lazy' /> Used Transmission</h2>
            <h2 id='srvc'><img id='servlogo' src={L3} alt="Installation" loading='lazy' />New Engine and Transmission</h2>
          </div>
        </div> {/* ✅ Closing div for serv-right */}
      </div> {/* ✅ Closing div for service-main */}
    </>
  )
}

export default Services
