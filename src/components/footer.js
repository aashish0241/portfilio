import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-400 to-blue-800 text-white font-medium text-center py-6">
      <div className="container mx-auto px-4">
        <p className="text-sm md:text-base">
          Aashish Timsina &copy; {currentYear}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
