import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 md:flex md:items-center md:justify-between">
      <div className="flex items-center mb-4 md:mb-0">
        <img src="../public/resturant.jpg" alt="Footer Image" className="w-16 h-16 mr-4"/>
        <div>
          <h4 className="text-lg font-bold">My Restaurant</h4>
          <p>Delicious food, great atmosphere</p>
        </div>
      </div>
      <div className="text-center md:text-left">
        <p>&copy; 2024 My Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
