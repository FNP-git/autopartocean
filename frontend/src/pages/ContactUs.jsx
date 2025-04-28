import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-page">
      {/* Map Section */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79404.83151948314!2d-71.88166210036002!3d42.302005411986286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4065678092fad%3A0xaf168588d8381b0c!2s287%20Grove%20St%2C%20Worcester%2C%20MA%2001605%2C%20USA!5e0!3m2!1sen!2sin!4v1743003025399!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Info Section */}
      <div className="contact-container">
        <h2 className="hdngs">Contact Us</h2>
        <div className="contact-details">
          <div>
            <h3 className="hdngs">Opening Hours</h3>
            <p>Mon-Fri: 9am - 6pm</p>
            <p>Sat: Closed</p>
            <p>Sun: Closed</p>
          </div>
          <div>
            <h3 className="hdngs">Location</h3>
            <div className="lctn">
            <p><strong>Head Office:</strong> 287 Grove St ,Worcester, MA 01605</p>
            <p><strong>Sales Office:</strong> 225 Cedal hills St Marlborough, MA 01752</p>
            <p><strong>Sales Office:</strong> 197M Boston Post Rd WMarlborough, MA 01752</p>
            </div>
          </div>
          <div>
            <h3 className="hdngs">Info</h3>
            <p>Phone: <a href="tel:+18888195651">+1-888-819-5651</a></p>
            <p>Email: <a href="mailto:info@autopartocean.com">info@autopartocean.com</a></p>
            <div>
            <h3 className="hdngs"> <br />Managed By</h3>
            <a href="https://www.fnpglobal.com/" target="blank"><p><strong>FNP Global</strong></p></a>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
