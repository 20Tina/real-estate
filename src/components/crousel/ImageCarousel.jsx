import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import real1 from '../../assets/images/real1.webp';
import real2 from '../../assets/images/real2.avif';
import real3 from '../../assets/images/real3.jpg';

import '../crousel/ImageCarousel.css';
import DownloadBrochure from '../DownloadBrochure/DownloadBrochure';

const ImageCarousel = () => {
  return (
    <div className="hero-carousel-wrapper">
      

      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={3000}
        transitionTime={600}
      >
        <div className="carousel-slide">
          <img src={real1} alt="Luxury Apartment" />
          <div className="carousel-overlay">
            <h1>Luxury Apartments</h1>
            <p>Modern, Stylish & Comfortable Living</p>
          </div>
        </div>
        <div className="carousel-slide">
          
          <img src={real2} alt="Modern Villa" />
          <div className="carousel-overlay">
            <h1>Modern Villas</h1>
            <p>Private Residences with Premium Features</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={real3} alt="Commercial Spaces" />
          <div className="carousel-overlay">
            <h1>Commercial Spaces</h1>
            <p>Grow Your Business in Style</p>
          </div>
        </div>
      </Carousel>
      <div className="download-icon-overlay">
        <DownloadBrochure />
      </div>
    </div>
    
  );
};

export default ImageCarousel;
