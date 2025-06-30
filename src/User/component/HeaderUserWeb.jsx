import React from 'react';
import { Menu } from 'lucide-react'; // icon untuk hamburger menu

const HeaderUserWeb = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-transparent">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div className="text-3xl font-serif italic font-bold text-[#A86844]">A</div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-white font-semibold text-sm tracking-wide">
          <a href="#" className="hover:text-[#A86844]">HOME</a>
          <a href="#" className="hover:text-[#A86844]">ABOUT US</a>
          <a href="#" className="hover:text-[#A86844]">CHECK IN - CHECK OUT</a>
          <a href="#" className="hover:text-[#A86844]">BLOG</a>
        </nav>
      </div>

      {/* Right Buttons */}
      <div className="flex items-center space-x-4">
        <button className="bg-[#f7f1e9] text-[#4e3b2f] px-5 py-2 rounded-full font-semibold text-xs shadow hover:bg-[#ebdfd4]">
          LOG-IN
        </button>
        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default HeaderUserWeb;
