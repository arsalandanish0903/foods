// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  // ${isScrolled ? 'bg-gray-800' : 'bg-transparent'}

  return (
    <nav className={`p-4 transition-all md:px-16 fixed top-0 w-full z-20 bg-gray-800`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/" className='text-[#FEA116] text-2xl'>
            <i className="fa fa-cutlery pr-2" aria-hidden="true"></i>
            Restoran
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-[#FEA116] px-5 text-xl font-bold' : 'text-white px-5 text-xl font-bold'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-[#FEA116] px-5 text-xl font-bold' : 'text-white px-5 text-xl font-bold'}>About</NavLink>
          <NavLink to="/service" className={({ isActive }) => isActive ? 'text-[#FEA116] px-5 text-xl font-bold' : 'text-white px-5 text-xl font-bold'}>Service</NavLink>
          <NavLink to="/menu" className={({ isActive }) => isActive ? 'text-[#FEA116] px-5 text-xl font-bold' : 'text-white px-5 text-xl font-bold'}>Menu</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-[#FEA116] px-5 text-xl font-bold' : 'text-white px-5 text-xl font-bold'}>Contact</NavLink>
          <button className='bg-[#FEA116] text-white px-4 py-2 font-bold rounded hover:bg-yellow-500'>Book A Table</button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-[#FEA116] block py-2' : 'text-white block py-2'} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-[#FEA116] block py-2' : 'text-white block py-2'} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/service" className={({ isActive }) => isActive ? 'text-[#FEA116] block py-2' : 'text-white block py-2'} onClick={() => setIsOpen(false)}>Service</NavLink>
          <NavLink to="/menu" className={({ isActive }) => isActive ? 'text-[#FEA116] block py-2' : 'text-white block py-2'} onClick={() => setIsOpen(false)}>Menu</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-[#FEA116] block py-2' : 'text-white block py-2'} onClick={() => setIsOpen(false)}>Contact</NavLink>
          <button onClick={() => setIsOpen(false)} className='text-white bg-[#FEA116] px-4 py-2 rounded hover:bg-white hover:text-black w-full mt-2'>Book A Table</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
