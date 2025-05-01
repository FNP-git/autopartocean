import React from 'react'
import ocean_logo from '../assets/ocean_logo.png'
import bbb_logo from '../assets/bbb.png'
import './Header.css'
import HamburgerMenu from './HamburgerMenu'
import trust from '../assets/trustpilot.png'


const Header = () => {
  return (
    <>
        <div id="header">
        <img id='logo' src={ocean_logo} alt="Autoparts Ocean Logo" />
        <a href="https://www.bbb.org/us/ma/marlborough/profile/used-auto-parts/auto-part-ocean-0021-561291" target="_blank" rel="noopener noreferrer">
          <img id='bbb' src={bbb_logo} alt="bbb accredited" />
        </a>
        <a 
  href="https://www.trustpilot.com/review/autopartocean.com" 
  target="_blank" 
  rel="noopener noreferrer"
  className="trustpilot-button-wrapper"
>
  <button id="trust" className="trustpilot-button">
    Review us on <img src={trust} alt="Trustpilot" className="trustpilot-logo" />
  </button>
</a>

        <div id="hm-menu">
          <HamburgerMenu/>
        </div>
        <div id="header-part2">
            <h4 id='sp'>SPEAK WITH A SPECIALIST NOW</h4>
            <h2 className='nmbr'>+1-888-819-5651</h2>
        </div>
         
        </div>
    </>
  )
}

export default Header