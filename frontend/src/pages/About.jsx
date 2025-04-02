import React from "react";
import "./About.css";
import ContactUs from "./ContactUs";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-heading">About AutoPartOcean</h1>
        <p className="about-text">
          At <strong>AutoPartOcean</strong>, we specialize in providing{" "}
          <strong>high-quality used, remanufactured, and rebuilt</strong> engines and 
          transmissions for a wide range of vehicle makes and models. Our mission is 
          to offer reliable, affordable, and top-performing auto parts to customers 
          nationwide, ensuring their vehicles run smoothly without excessive costs.
        </p>

        <h2 className="about-subheading">Our Products</h2>

        <div className="about-section">
          <h3 className="about-category">Engines</h3>
          <ul className="about-list">
            <li><strong>Used Engines</strong> – Thoroughly inspected, high-performance used engines for various car models.</li>
            <li><strong>Remanufactured Engines</strong> – Professionally restored to like-new condition, ensuring durability and efficiency.</li>
            <li><strong>Rebuilt Engines</strong> – Carefully disassembled, repaired, and reassembled to meet high-performance standards.</li>
          </ul>
        </div>

        <div className="about-section">
          <h3 className="about-category">Transmissions</h3>
          <ul className="about-list">
            <li><strong>Used Transmissions</strong> – Reliable manual and automatic transmissions for multiple car brands.</li>
            <li><strong>Remanufactured Transmissions</strong> – Completely overhauled and tested to deliver optimal performance.</li>
            <li><strong>Rebuilt Transmissions</strong> – Expertly restored to OEM-level quality for enhanced durability.</li>
          </ul>
        </div>

        <div className="about-section">
          <h3 className="about-category">Small Parts & Accessories</h3>
          <ul className="about-list">
            <li>Alternators & Starters</li>
            <li>Cylinder Heads</li>
            <li>Fuel Injectors</li>
            <li>Turbochargers</li>
            <li>Timing Chains & Belts</li>
            <li>And more!</li>
          </ul>
        </div>

        <h2 className="about-subheading">Our Commitment to Quality</h2>
        <p className="about-text">
          At AutoPartOcean, customer satisfaction is our top priority. Our expert technicians meticulously inspect, refurbish, and test each part to ensure it meets the highest industry standards.
        </p>

        <ul className="about-benefits">
          <li>✅ Affordable pricing without compromising quality</li>
          <li>✅ Warranties on remanufactured & rebuilt parts</li>
          <li>✅ Fast and reliable shipping across the U.S.</li>
          <li>✅ A dedicated customer service team to assist you</li>
        </ul>

        <p className="about-text about-closing">
          <strong>We're here to help you find the perfect auto part for your vehicle.</strong>
        </p>
      </div>
    </div>
  );
};

export default About;
