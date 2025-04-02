import React from 'react';
import './Provide.css';
import SmallCard from '../components/SmallCard'
import WideCard from '../components/WideCard'

const Provide = () => {
  return (
    <>
    <div className="provide-main">
      <div id="prov-left">
        <div id="prov-semi-head">
          <h4 id="prov-check">We Provide</h4>
          <h1 id="prov">Top-Quality Parts for Every Brand</h1>
        </div>
        <p id="prov-para">
        At AutoPartOcean, we source high-quality parts from the best brands to ensure the reliability and durability of your vehicle. Our inventory includes top brands to meet the diverse needs of our customers.
        </p>
      </div>
      <div id="prov-right">
        <div id="L1">
            <SmallCard parts="Used Engine"/>
            <WideCard parts="Used Transmission"/>
        </div>
        <div id="L2">
            <WideCard parts="Reman Transmision" />
            <SmallCard parts="Reman Engine" />
        </div>  
        <div id="L1">
            <SmallCard parts="Rebuilt Engine"/>
            <WideCard parts="Rebuilt Transmission"/>
        </div>  
      </div> 
    </div>
    </>
  );
};

export default Provide;
