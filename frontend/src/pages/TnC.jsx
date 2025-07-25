import React from "react";
import "./TnC.css";

const TnC = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-heading">Warranty Policy</h1>
        
        <h2 className="about-subheading">Used Engine Warranty</h2>
        <p className="about-text">
          This warranty applies to the engine cylinder head and block assembly. Our warranty excludes the coverage of the following accessories: fuel injection components, carburetor, intake and exhaust manifolds, distributor, alternator, emission control devices, smog pump and components, seals, timing belt (and any related tensioner, tensioner adjusters, and/or idler bearings), timing cover, thermostat, water pump, flywheel or flex plate, pulleys, valve cover, sensors, switches, oil pan and oil pickup tube, turbocharger, and intercooler (where applicable). The above parts must be replaced or swapped from your old original engine. Please note that labor costs are not covered under warranty.
        </p>

        <p className="about-text">
          Warranty covers only its performance not the appearance or cosmetic damages, there may be rust, scratches, or dents on the appearance.
        </p>
        
        <h3 className="about-category">To validate the engine warranty, you must:</h3>
        <div className="about-section">
          <ul className="about-list">
            <li>Drain and replace engine oil to manufacturer suggested levels.</li>
            <li>Replace oil, air, and fuel filters.</li>
            <li>Replace valve cover & all gaskets.</li>
            <li>Replace oil pan gasket & rear main seal.</li>
            <li>Replace timing gears, chains, or belts & gaskets, if needed.</li>
            <li>Replace thermostat & all gaskets.</li>
            <li>Flush cooling system and refill it to the proper level.</li>
            <li>Install new spark plugs & wires.</li>
            <li>Install new belts and hoses.</li>
          </ul>
        </div>

        <h2 className="about-subheading">Used Transmission Warranty</h2>
        <p className="about-text">
          We guarantee that it will shift properly, gears, and bearings to be in good working condition. Please note that labor costs are not covered under warranty.
        </p>

        <h3 className="about-category">To validate the transmission warranty, you must:</h3>
        <div className="about-section">
          <ul className="about-list">
            <li>Replace all seals.</li>
            <li>Install new filter kit.</li>
            <li>Flush and inspect cooling lines.</li>
            <li>Align and engage the torque converter into the front pump.</li>
            <li>Fill transmission with manufacturer specified fluid.</li>
            <li>Clear all transmission computer codes before starting or operating the vehicle.</li>
            <li>Adjust throttle position sensor cables.</li>
          </ul>
        </div>

        <h2 className="about-subheading">General Terms & Conditions</h2>
        <p className="about-text">
          If return or replacement was authorized by AutoPartOcean, the part needs to be received in the same condition as it was originally shipped to the customer. Refunds are only authorized if replacement is not available.
        </p>

        <h2 className="about-subheading">Shipping Terms</h2>
        <p className="about-text">
          We offer free shipping only to a business or commercial address. If the part is not received in the same condition, there will be no refund under any circumstances.
        </p>
      </div>
    </div>
  );
};

export default TnC;
