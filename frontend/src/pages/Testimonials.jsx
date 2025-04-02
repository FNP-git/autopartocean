import React from "react";
import TestCard from "../components/TestCard";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    "I recently purchased a used engine from AutoPartOcean, and I'm impressed with the performance. The EnginePro part has restored my car's power and efficiency. Highly recommended!",
    "The transmission I bought from AutoPartOcean surpassed my expectations. It's from TransMaster, and it has greatly enhanced the performance of my vehicle. Thank you, AutoPartOcean!",
    "I'm extremely satisfied with the quality of the engine I purchased from AutoPartOcean. The GearMax engine has exceeded my expectations, and it was delivered promptly. I highly recommend AutoPartOcean for reliable auto parts."
  ];

  return (
    <div className="testimonials-page">
      <h1 className="testimonials-heading">What <span id="spn">Our Customers</span> Say</h1>
      <div className="testimonials-container">
        {testimonials.map((text, index) => (
          <TestCard key={index} text={text} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
