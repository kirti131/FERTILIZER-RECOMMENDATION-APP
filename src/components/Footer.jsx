import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-green-600 text-white py-10 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-xl font-semibold mb-4">
          “Farming is not just a profession, it’s a passion that feeds the world.”
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} - All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

