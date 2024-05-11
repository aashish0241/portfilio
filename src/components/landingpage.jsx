import React from "react";
import Hero from "./hero";
import About1 from "./about";
import Skillscollection from "./skills";
import Service from "./service";
import Portfilio from "./portfilio";
import Contact from "./contact";
import Certificate from "./certificate";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <About1 />
      <Skillscollection />
      <Certificate />
      <Service />
      <Portfilio />
      <Contact />
    </div>
  );
};

export default LandingPage;
