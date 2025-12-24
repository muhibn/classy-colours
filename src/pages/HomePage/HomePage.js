  
import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import OurServices from '../../components/OurServices/OurServices';
import Testimonials from '../../components/Testimonials/Testimonials';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      
      

      <HeroSection />
      <OurServices />
      <Testimonials />
    </div>
  );
};

export default HomePage;