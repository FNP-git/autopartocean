import React from 'react'
import { NavLink } from 'react-router-dom'; 
import apo from '../assets/apo.svg'

import bbb_logo from '../assets/bbb.png'
import './Header.css'
import HamburgerMenu from './HamburgerMenu'
import trust from '../assets/trustpilot.png'


const Header = () => {
  return (
    <>
        <div id="header">
<NavLink to="/">
  <img id='logo' src={apo} alt="Autoparts Ocean Logo" loading='lazy' />
</NavLink>        <a href="https://www.bbb.org/us/ma/marlborough/profile/used-auto-parts/auto-part-ocean-0021-561291" target="_blank" rel="noopener noreferrer">
          <img id='bbb' src={bbb_logo} alt="bbb accredited" loading='lazy' />
        </a>
        <a 
  href="https://www.trustpilot.com/review/autopartocean.com" 
  target="_blank" 
  rel="noopener noreferrer"
  className="trustpilot-button-wrapper"
>
  <button id="trust" className="trustpilot-button">
    Review us on <img src={trust} alt="Trustpilot" className="trustpilot-logo" loading='lazy' />
  </button>
</a>

        <div id="hm-menu">
          <HamburgerMenu/>
        </div>
        <div id="header-part2">
  <h4 id='sp'>SPEAK WITH A SPECIALIST NOW</h4>
  <a href="tel:+18888195651" className="nmbr">+1-888-819-5651</a>
</div>

         
        </div>
    </>
  )
}

export default Header