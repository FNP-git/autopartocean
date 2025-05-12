import React from "react";
import "./Rtrn.css";

const Rtrn = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-heading">Return & Cancellation Policy</h1>

        <p className="about-text">
          No refunds on special ordered parts.
        </p>
        <p className="about-text">
          All returns must be accompanied by an original receipt.
        </p>
        <p className="about-text">
          AutoPartOcean does not cover labor charges in any circumstances.
        </p>
        <p className="about-text">
          Abuse, Commercial Use, Industrial Use voids any and all warranties.
        </p>
        <p className="about-text">
          AutoPartOcean only guarantees the performance of the part, not the appearance of it since it is a used part.
        </p>

        <h2 className="about-subheading">Cancellation & Refund Policy</h2>
        <div className="about-section">
          <ul className="about-list">
            <li>If any order is cancelled other than performance-related issues, then a restocking fee of 30% will be applicable.</li>
            <li>If the order is cancelled after shipping, then a restocking fee of 30% will be applicable along with the shipping charges.</li>
            <li>If the order is refused at the doorstep, then a restocking fee of 30% will be applicable along with the shipping charges (to-and-fro).</li>
            <li>All Deposits and Booking Amounts are taken in "good faith" and are non-refundable under any circumstances.</li>
          </ul>
        </div>

        <h2 className="about-subheading">Warranty Claim Procedure</h2>
        <p className="about-text">
          In the unlikely event of a Head/Block/Transmission being defective, we will require the following to be emailed to us: (ATTN: Claims or Queries emailed to <a href="mailto:sales@autopartocean.com">sales@autopartocean.com</a>)
        </p>
        <div className="about-section">
          <ul className="about-list">
            <li>AutoPartOcean provides a standard replacement warranty of 30 days.</li>
            <li>To activate the warranty, provide a copy of the Driver's License or any State ID (Photo ID).</li>
            <li>A detailed diagnostic report along with pictures & videos of the defective part from a Certified Mechanic is required.</li>
            <li>A copy of the mechanic’s certification along with their contact information must be provided.</li>
            <li>Once all required paperwork is received, we will decide whether to provide a refund or replacement.</li>
            <li>Accessories are not covered under the warranty whether damaged or missing.</li>
            <li>Shipping charges are not covered under warranty.</li>
          </ul>
        </div>

        <p className="about-text">
          If you have any questions or concerns regarding the warranty or any other queries, feel free to contact us via email at <a href="mailto:sales@autopartocean.com">sales@autopartocean.com</a> or call us at <a href="tel:+18888195651">+1-888-819-5651</a>.
        </p>

        <p className="about-text about-closing">
          AutoPartOcean reserves all rights to change or modify the warranty at any time.
        </p>
      </div>
    </div>
  );
};

export default Rtrn;
