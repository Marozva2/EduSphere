import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image4 from '../../images/4.jpg';
import image5 from '../../images/5.jpg';

function HeroSection() {
  return (
    <>
    <section className="hero">
      <div className="hero-content">
        <h1>EduSphere</h1>
        <p>Raising Next Gen Leaders</p>
      </div>
      <div className="hero-image">
        {/* <img src="../images/12.jpg" alt="EduSphere Image" /> */}
      </div>
    </section>
</>
  );
}

export default HeroSection;
