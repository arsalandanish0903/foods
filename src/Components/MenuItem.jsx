import React from 'react';

const MenuItem = ({ image, title, price, description }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center border-b py-4">
      <div className="flex items-center w-full md:w-2/3">
        <img src={image} alt={title} className="w-16 h-16 object-cover rounded mr-4" />
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
      <div className="mt-2 md:mt-0">
        <p className="text-2xl font-bold text-[#FEA116]">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
