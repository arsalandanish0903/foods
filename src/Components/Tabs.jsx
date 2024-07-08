import React, { useState } from 'react';
import Menu from './Menus';
import Menus from './Menus';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabData = [
    {
      id: 0,
      label: 'Popular Dishes',
      items: [
        { image: '../public/menu-1.jpg', title: 'Chicken Burger', price: 115, description: 'Ipsum ipsum clita erat amet dolor justo diam' },
        { image: '../public/menu-2.jpg', title: 'Chicken Leg Piece', price: 120, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { image: '../public/menu-3.jpg', title: 'Chicken Masala', price: 120, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { image: '../public/menu-4.jpg', title: 'Beef Burger', price: 120, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { image: '../public/menu-5.jpg', title: 'Chicken Burger', price: 115, description: 'Ipsum ipsum clita erat amet dolor justo diam' },
        { image: '../public/menu-6.jpg', title: 'Chicken Leg Piece', price: 120, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { image: '../public/menu-7.jpg', title: 'Chicken Masala', price: 120, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { image: '../public/menu-8.jpg', title: 'Beef Burger', price: 120, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }
      ],
    },
    {
      id: 1,
      label: 'Lunch',
      items: [
        { image: '../public/menu-4.jpg', title: 'Beef Burger', price: 120, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { image: '../public/menu-1.jpg', title: 'Chicken Burger', price: 115, description: 'Ipsum ipsum clita erat amet dolor justo diam' },
        { image: '../public/menu-6.jpg', title: 'Chicken Leg Piece', price: 120, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { image: '../public/menu-5.jpg', title: 'Chicken Burger', price: 115, description: 'Ipsum ipsum clita erat amet dolor justo diam' },
        { image: '../public/menu-2.jpg', title: 'Chicken Leg Piece', price: 120, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { image: '../public/menu-7.jpg', title: 'Chicken Masala', price: 120, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { image: '../public/menu-8.jpg', title: 'Beef Burger', price: 120, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { image: '../public/menu-3.jpg', title: 'Chicken Masala', price: 120, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }
      ],
    },
    {
      id: 2,
      label: 'Dinner',
      items: [
        { image: '../public/menu-8.jpg', title: 'Beef Burger', price: 120, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { image: '../public/menu-7.jpg', title: 'Chicken Masala', price: 120, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { image: '../public/menu-1.jpg', title: 'Chicken Burger', price: 115, description: 'Ipsum ipsum clita erat amet dolor justo diam' },
        { image: '../public/menu-2.jpg', title: 'Chicken Leg Piece', price: 120, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { image: '../public/menu-4.jpg', title: 'Beef Burger', price: 120, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { image: '../public/menu-3.jpg', title: 'Chicken Masala', price: 120, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },        
        { image: '../public/menu-5.jpg', title: 'Chicken Burger', price: 115, description: 'Ipsum ipsum clita erat amet dolor justo diam' },
        { image: '../public/menu-6.jpg', title: 'Chicken Leg Piece', price: 120, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        
      ],
    },
  ];

  return (
    <div className="p-5">
      <div className="flex justify-center border-b">
        {tabData.map(tab => (
          <button
            key={tab.id}
            className={`py-2 px-4 focus:outline-none text-xl font-bold ${
              activeTab === tab.id ? 'border-b-2 border-[#FEA116]' : ''
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <Menus items={tabData[activeTab].items} />
      </div>
    </div>
  );
};

export default Tabs;
