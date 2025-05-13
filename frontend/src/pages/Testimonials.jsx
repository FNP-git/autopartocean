import React, { useEffect, useRef, useState } from 'react';
import TestCard from '../components/TestCard';
import './Testimonials.css';

const testimonials = [
  "I recently purchased a used engine from AutoPartOcean, and I'm impressed with the performance.",
  "The transmission I bought from AutoPartOcean surpassed my expectations.",
  "I'm extremely satisfied with the quality of the engine I purchased from AutoPartOcean.",
  "Amazing experience! The support team helped me select the perfect fit.",
  "Fast delivery and excellent condition. Highly recommend AutoPartOcean!",
  "Affordable pricing and quality parts – can't ask for more.",
  "Customer service was responsive and helpful.",
  "Installation was easy, and the engine runs great.",
  "The engine came with warranty and performed like new.",
  "Seamless experience from browsing to delivery.",
  "Highly dependable source for used transmissions.",
  "EnginePro part restored my car's performance.",
  "Definitely coming back for future car parts.",
  "Their GearMax engine worked wonders for my SUV.",
  "Best value-for-money automotive parts provider."
];

const Testimonials = () => {
  const wrapperRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsSmallScreen(window.innerWidth <= 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const scrollLeft = () => {
    wrapperRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    wrapperRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="testimonials-section fade-up">
      <h1 id="testimonials-head" className="fade-up">What <span id="spn">Our Customers</span> Say</h1>
      <div className="clients-container fade-up">
        {!isSmallScreen && (
          <button className="arrow-button left" onClick={scrollLeft}>‹</button>
        )}
        <div className="slider-window" ref={wrapperRef}>
          <div className={`cards-wrapper ${isSmallScreen ? 'scrollable' : 'animate'}`}>
            {testimonials.map((text, i) => (
              <div className="test-card-container" key={i}>
                <TestCard text={text} />
              </div>
            ))}
          </div>
        </div>
        {!isSmallScreen && (
          <button className="arrow-button right" onClick={scrollRight}>›</button>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
