import React from "react";
import Hero from "./hero";
import About1 from "./about";
import Skillscollection from "./Skills";
import Service from "./service";
import Portfilio from "./portfilio";
import Contact from "./contact";
import Certificate from "./certificate";

const LandingPage = () => {
  return (
    <div className="bg-dark-900 text-light-100">
      <Hero />
      <About1 />
      <Skillscollection />
      <Service />
      <Portfilio />
      <Certificate />
      <Contact />
    </div>
  );
};

export default LandingPage;
