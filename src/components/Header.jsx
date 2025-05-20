import React, { useState } from 'react';
import Button from './ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg w-full pt-1">
  <div className="container mx-auto px-6 md:px-10 lg:px-24 flex justify-between items-center h-[80px]">
    <div className="flex items-center">
      <img src="/img/vector.svg" alt="Dekoor Logo" className="w-10 h-10" />
      <img src="/img/dekoor.svg" alt="Dekoor" className="h-[22px] ml-3" />
    </div>

    {/* Desktop Nav */}
    <nav className="hidden lg:flex items-center space-x-10 lg:space-x-20">
      <a href="#about" className="text-base lg:text-lg font-semibold text-black">About us</a>
      <div className="relative group">
        <div className="flex items-center cursor-pointer">
          <span className="text-base lg:text-lg font-semibold text-black">Furniture</span>
          <img src="/img/keyboardarrowdown.svg" alt="Dropdown" className="w-5 h-5 ml-1" />
        </div>
        <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-4 min-w-[180px] z-10">
          <a href="#living-room" className="block py-2 text-gray-700 hover:text-black">Living Room</a>
          <a href="#bedroom" className="block py-2 text-gray-700 hover:text-black">Bedroom</a>
          <a href="#home-office" className="block py-2 text-gray-700 hover:text-black">Home Office</a>
          <a href="#gaming-room" className="block py-2 text-gray-700 hover:text-black">Gaming Room</a>
        </div>
      </div>
      <a href="#partnerships" className="text-base lg:text-lg font-semibold text-black">Partnerships</a>
      <a href="#contact" className="text-base lg:text-lg font-semibold text-black">Contact</a>
    </nav>

    {/* Buttons */}
    <div className="flex items-center space-x-4">
      <Button variant="primary" className="hidden md:block h-10 lg:h-12 rounded-lg">
        Sign Up
      </Button>

      <button className="bg-[#553b33] w-10 h-10 lg:w-12 lg:h-12 rounded-lg md:flex items-center justify-center hidden ">
        
        <img src="/img/group.svg" alt="Search" className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>

      {/* Hamburger */}
      <button 
        className="lg:hidden ml-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile menu */}
  {isMenuOpen && (
    <div className="lg:hidden bg-white shadow-lg z-20 px-6 py-4">
      <a href="#about" className="block py-2 text-base font-medium text-black">About us</a>
      <a href="#furniture" className="block py-2 text-base font-medium text-black">Furniture</a>
      <a href="#partnerships" className="block py-2 text-base font-medium text-black">Partnerships</a>
      <a href="#contact" className="block py-2 text-base font-medium text-black">Contact</a>
      <Button variant="primary" className="md:hidden mt-4 w-full h-10 rounded-lg">
        Sign Up
      </Button>
    </div>
  )}
</header>

  );
};

export default Header;