import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingpage";
import AboutDescribe from "./components/aboutdescribe";
import Header from "./components/header";
import SkillsCollection from "./components/skills";
import Service from "./components/service";
import Portfilio from "./components/portfilio";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Certificate from "./components/certificate";
import Error10 from "./components/error";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      duration: 2000,
      easing: "ease",
      once: false,
      mirror: false,
      offset: 100,
      delay: 300,

      // whether elements should animate out while scrolling past them
    });
  }, []);
  return (
    <div className="overflow-hidden">
    <Router>
      <Header />
      <Routes>
        {/* Specify the element or component for the root route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutDescribe />} />
        <Route path="*" element={<Error10 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfilio />} />
        <Route path="/skills" element={<SkillsCollection />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
};

export default App;
