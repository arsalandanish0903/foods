import React from 'react';
import MenuItem from './MenuItem';

const Menus = ({ items }) => {
  return (
    <div className="container md:columns-2 mx-auto p-5">
      {items.map((item, index) => (
        <MenuItem
          key={index}
          image={item.image}
          title={item.title}
          price={item.price}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Menus;
