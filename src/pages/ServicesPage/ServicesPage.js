  
import React from 'react';
import OurServices from '../../components/OurServices/OurServices';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <h1>Our Painting Services</h1>
      <OurServices />
      <div className="service-details">
        <p>
          We provide comprehensive painting solutions for all types of properties. 
          Our team uses high-quality materials and follows industry best practices 
          to ensure long-lasting, beautiful results.
        </p>
        <p>
          Contact us today for a free quote and color consultation!
        </p>
      </div>
    </div>
  );
};

export default ServicesPage;