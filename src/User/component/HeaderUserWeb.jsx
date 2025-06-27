import React from 'react';

const HeaderUserWeb = () => {
  return (
    <header className="bg-white px-6 py-4 shadow flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="text-3xl font-serif italic font-bold text-[#A86844]">A</div>
        <nav className="hidden md:flex space-x-6 text-[#4e3b2f] font-medium">
          <a href="#" className="hover:text-[#A86844]">Home</a>
          <a href="#" className="hover:text-[#A86844]">About Us</a>
          <a href="#" className="hover:text-[#A86844]">Check In - Check Out</a>
          <a href="#" className="hover:text-[#A86844]">Blog</a>
        </nav>
      </div>
      <button className="bg-[#A86844] text-white px-4 py-2 rounded-full shadow hover:bg-[#92593c]">
        Get Started
      </button>
    </header>
  );
};

export default HeaderUserWeb;
