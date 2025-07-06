import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const HeaderUserWeb = () => {
  return (
    // Menggunakan flexbox untuk layout utama header
    <header className="absolute top-0 left-0 w-full z-50 px-6 lg:px-12 py-4 flex items-center justify-between bg-transparent">

      {/* Kolom Kiri: Logo */}
      <div className="flex justify-center mb-6">
        <img src="/logo1.png" alt="logo" className="h-20" />
      </div>

      {/* Kolom Tengah: Navigasi */}
      <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 text-white uppercase tracking-wider text-sm">
        <Link to="/" className="hover:text-gray-300 transition">Home</Link>
        <Link to="/about-us" className="hover:text-gray-300 transition">About Us</Link>
        <Link to="/room/1" className="hover:text-gray-300 transition">Check In - Check Out</Link>
        <Link to="/contact" className="hover:text-gray-300 transition">Contact Us</Link>
      </nav>

      {/* Kolom Kanan: Tombol Aksi */}
      <div className="flex items-center space-x-4">
        <Link
          to="/signin"
          className="bg-[#f7f1e9] text-[#4e3b2f] px-5 py-2 rounded-full font-semibold text-xs shadow hover:bg-[#ebdfd4] transition"
        >
          LOG-IN
        </Link>
        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default HeaderUserWeb;