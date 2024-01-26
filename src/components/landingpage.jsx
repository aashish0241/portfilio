import React from 'react';
import Hero from './hero';
import About1 from './about';
import Skillscollection from './skills';
import Service from './service';
import Portfilio from "./portfilio"
import Pricing from './price';
import Contact from './contact';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <About1 />
      <Skillscollection />
      <Service/>
      <Portfilio/>
      <Pricing/>
      <Contact/>
    
    </div>
  );
};

export default LandingPage;
