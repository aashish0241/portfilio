import React from "react";
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


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Specify the element or component for the root route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutDescribe />} />
        <Route path="*" element={<Error10/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfilio />} />
        <Route path="/skills" element={<SkillsCollection />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
