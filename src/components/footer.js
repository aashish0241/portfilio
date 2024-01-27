import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#453952] text-white font-bold text-center py-4">
      <p className="text-white">
 Aashish Timsina ||&copy; {currentYear} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
