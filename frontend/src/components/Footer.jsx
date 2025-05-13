import React from 'react'
import './Footer.css'
import fb from '../assets/fb.png'
import insta from '../assets/insta.png'
import x from '../assets/x.png'

const Footer = () => {
  return (
    <>
        <div id="foot">
            <h1 id='foot-text'>© 2019 AutoPartOcean. All Rights Reserved.</h1>
            <h2 id='foot-text'>AutoPartOcean is an entity of Revenue Dealer LLC</h2>
            <div id="socials">
            <a href="">
          <img src={fb} alt="facebook" loading='lazy' />
        </a>
        <a href="">
          <img src={insta} alt="insta" loading='lazy' />
        </a>
        <a href="">
          <img src={x} alt="x" loading='lazy' />
        </a>
            </div>
        </div>
        
    </>
  )
}

export default Footer
