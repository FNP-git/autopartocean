import React from 'react';
import './Brands.css';
import SliderOne from '../components/SliderOne';
import SliderTwo from '../components/SliderTwo';
import { useNavigate } from 'react-router-dom';

// First cluster of 12 images
import acura from '../assets/acura.webp';
import alfaromeo from '../assets/alfaromeo.webp';
import audi from '../assets/audi.webp';
import bmw from '../assets/bmw.webp';
import buick from '../assets/Buick.webp';
import cadillac from '../assets/CADILLAC.jpg';
import chevy from '../assets/chevy.webp';
import chrysler from '../assets/CHRYSLER.jpg';
import datsun from '../assets/datsun.webp';
import deawoo from '../assets/deawoo.webp';
import diahatsu from '../assets/diahatsu.webp';
import dodge from '../assets/dodge.webp';

// Second cluster of 12 images
import ford from '../assets/ford.webp';
import geo from '../assets/geo.webp';
import gmc from '../assets/gmc.webp';
import honda from '../assets/honda.webp';
import hummer from '../assets/hummer.webp';
import hyundai from '../assets/hyundai.webp';
import infiniti from '../assets/infiniti.webp';
import jaguar from '../assets/jaguar.webp';
import jeep from '../assets/jeep.webp';
import kia from '../assets/kia.webp';
import landrover from '../assets/landrover.webp';
import lexus from '../assets/lexus.webp';

// Third cluster of 12 images
import mazda from '../assets/mazda.webp';
import mercedes from '../assets/mercedes.webp';
import mini from '../assets/mini.webp';
import mitsubishi from '../assets/mitsubishi.webp';
import nissan from '../assets/nissan.webp';
import porsche from '../assets/porsche.webp';
import sabura from '../assets/sabura.webp';
import saturn from '../assets/saturn.webp';
import scion from '../assets/scion.webp';
import suzuki from '../assets/suzuki.webp';
import toyota from '../assets/toyota.webp';
import volvo from '../assets/volvo.webp';

const Brands = () => {
  // First cluster for SliderOneImages
  const sliderOneImages = [
    { src: acura, brandName: 'Acura' },
    { src: alfaromeo, brandName: 'Alfaromeo' },
    { src: audi, brandName: 'Audi' },
    { src: bmw, brandName: 'BMW' },
    { src: buick, brandName: 'Buick' },
    { src: cadillac, brandName: 'Cadillac' },
    { src: chevy, brandName: 'Chevy' },
    { src: chrysler, brandName: 'Chrysler' },
    { src: datsun, brandName: 'Datsun' },
    { src: deawoo, brandName: 'Deawoo' },
    { src: diahatsu, brandName: 'Daihatsu' },
    { src: dodge, brandName: 'Dodge' },
  ];

  // Second cluster for SliderTwoImages
  const sliderTwoImages = [
    { src: ford, brandName: 'Ford' },
    { src: geo, brandName: 'Geo' },
    { src: gmc, brandName: 'GMC' },
    { src: honda, brandName: 'Honda' },
    { src: hummer, brandName: 'Hummer' },
    { src: hyundai, brandName: 'Hyundai' },
    { src: infiniti, brandName: 'Infiniti' },
    { src: jaguar, brandName: 'Jaguar' },
    { src: jeep, brandName: 'Jeep' },
    { src: kia, brandName: 'Kia' },
    { src: landrover, brandName: 'Land Rover' },
    { src: lexus, brandName: 'Lexus' },
  ];

  // Third cluster for SliderThreeImages
  const sliderThreeImages = [
    { src: mazda, brandName: 'Mazda' },
    { src: mercedes, brandName: 'Mercedes' },
    { src: mini, brandName: 'Mini' },
    { src: mitsubishi, brandName: 'Mitsubishi' },
    { src: nissan, brandName: 'Nissan' },
    { src: porsche, brandName: 'Porsche' },
    { src: sabura, brandName: 'Sabura' },
    { src: saturn, brandName: 'Saturn' },
    { src: scion, brandName: 'Scion' },
    { src: suzuki, brandName: 'Suzuki' },
    { src: toyota, brandName: 'Toyota' },
    { src: volvo, brandName: 'Volvo' },
  ];

  // Scroll-to-top on image click
  const handlePageClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of the page
  };

  return (
    <div className="brands-container">
        <h1 className='bhd'>OUR BRANDS</h1>
      <SliderOne images={sliderOneImages}  />
      <SliderTwo images={sliderTwoImages}  />
      <SliderOne images={sliderThreeImages}  />
    </div>
  );
};

export default Brands;
