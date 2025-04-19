import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingpage";
import AboutDescribe from "./components/aboutdescribe";
import Header from "./components/Header";
import SkillsCollection from "./components/Skills";
import Service from "./components/service";
import Portfilio from "./components/portfilio";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Certificate from "./components/certificate";
import Error10 from "./components/error";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease",
      once: false,
      mirror: false,
      offset: 100,
      delay: 300,
    });
    AOS.refresh();

    // Simulating page load for 2 seconds (replace with actual logic)
    setTimeout(() => {
      setLoading(false);
    }, 1100);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-dark-900">
      {loading ? (
        // Loading Animation
        <div className="flex items-center justify-center w-full h-screen bg-dark-900">
          <div
            className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-current border-t-transparent rounded-full"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <Router>
          <Header />
          <main className="flex-grow pt-[72px]">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutDescribe />} />
              <Route path="*" element={<Error10 />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/service" element={<Service />} />
              <Route path="/portfolio" element={<Portfilio />} />
              <Route path="/skills" element={<SkillsCollection />} />
              <Route path="/certificate" element={<Certificate />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      )}
    </div>
  );
};

export default App;
