import React from 'react'
import { FaHome, FaBed, FaCog } from 'react-icons/fa'

const SidebarUser = () => {
  return (
    <aside className="bg-white border-r border-gray-100 shadow-lg w-64 min-h-screen flex flex-col">
      {/* Brand Header */}
      <div className="p-6 border-b border-[#A86844]/20 flex items-center space-x-2">
        <span className="text-3xl font-serif font-bold text-[#A86844]">Aryaduta</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6 space-y-2">
        <NavLink href="/User" icon={<FaHome />} label="Beranda" />
        <NavLink href="/User/Reservasi" icon={<FaBed />} label="Reservasi Kamar" />
        <div className="border-t border-gray-100 my-4"></div>
        <NavLink href="#" icon={<FaCog />} label="Pengaturan" />
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[#A86844]/20 text-xs text-gray-400 text-center">
        &copy; {new Date().getFullYear()} Aryaduta Hotel
      </div>
    </aside>
  )
}

const NavLink = ({ href, icon, label }) => (
  <a
    href={href}
    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#A86844]/10 hover:text-[#A86844] transition"
  >
    <span className="text-[#A86844] text-lg">{icon}</span>
    <span className="font-medium">{label}</span>
  </a>
)

export default SidebarUser
