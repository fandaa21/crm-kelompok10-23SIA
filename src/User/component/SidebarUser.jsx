import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { FaHome, FaBed, FaCog } from 'react-icons/fa';
import { LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext'; // Sesuaikan path jika perlu

const SidebarUser = () => {
    const { logout } = useAuth(); // Ambil fungsi logout dari context

    const menuItems = [
        { name: "Beranda", icon: <FaHome />, path: "/User" },
        { name: "Reservasi Kamar", icon: <FaBed />, path: "/User/Reservasi" },
    ];

    const settingItems = [
        { name: "Pengaturan", icon: <FaCog />, path: "/User/Pengaturan" },
    ];

    // Style untuk NavLink yang aktif dan tidak aktif
    const navLinkStyles = ({ isActive }) => 
        `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
            isActive 
            ? "bg-[#A86844]/20 text-[#A86844] font-bold" 
            : "text-gray-600 hover:bg-[#A86844]/10 hover:text-[#A86844]"
        }`;

    return (
        <aside className="bg-white border-r border-gray-200 shadow-md w-64 min-h-screen flex-col justify-between hidden md:flex">
            <div>
                {/* Brand Header */}
                <div className="p-6 border-b border-gray-200 flex items-center justify-center">
                    <span className="text-3xl font-serif font-bold text-[#A86844]">Aryaduta</span>
                </div>

                {/* Navigasi Utama */}
                <nav className="flex-1 p-4 space-y-2">
                    {menuItems.map((item) => (
                        <NavLink key={item.name} to={item.path} className={navLinkStyles} end>
                            <span className="text-lg">{item.icon}</span>
                            <span>{item.name}</span>
                        </NavLink>
                    ))}
                </nav>
            </div>
            
            {/* Navigasi Bawah (Pengaturan & Logout) */}
            <div className="p-4 border-t border-gray-200">
                <nav className="space-y-2">
                    {settingItems.map((item) => (
                         <NavLink key={item.name} to={item.path} className={navLinkStyles}>
                            <span className="text-lg">{item.icon}</span>
                            <span>{item.name}</span>
                        </NavLink>
                    ))}
                     <button
                        onClick={logout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-red-100 hover:text-red-700 transition-colors duration-200"
                    >
                        <LogOut size={20}/>
                        <span>Logout</span>
                    </button>
                </nav>
            </div>
        </aside>
    );
};

export default SidebarUser;