import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ChevronDown, User, Settings, LogOut } from 'lucide-react';

const HeaderUser = () => {
    // Ambil data user dan fungsi logout dari context
    const { user, profile, logout } = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    // Logika untuk menutup dropdown saat klik di luar
    const dropdownRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownRef]);


    return (
        <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
            {/* Judul Halaman (bisa dibuat dinamis nanti) */}
            <h1 className="text-xl font-semibold text-gray-800">Dashboard Pengguna</h1>
            
            {/* Menu Profil Pengguna */}
            <div className="relative" ref={dropdownRef}>
                <button 
                    onClick={() => setDropdownOpen(!dropdownOpen)} 
                    className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg"
                >
                    <img
                        src={profile?.avatar_url || `https://i.pravatar.cc/40?u=${user?.id}`}
                        alt="User Avatar"
                        className="w-9 h-9 rounded-full  "
                    />
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-semibold text-gray-800">
                            {profile?.nama_lengkap || user?.email}
                        </p>
                        <p className="text-xs text-gray-500 capitalize">
                            {profile?.role || 'user'}
                        </p>
                    </div>
                    <ChevronDown size={18} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                    <div className="absolute right-4 top-16 bg-white rounded-lg shadow-lg z-50 ">
                        <ul>
                            <li><a href="#" className="flex items-center gap-2 p-3 text-sm hover:bg-gray-100"> <User size={16}/> Profil Saya</a></li>
                            <li><a href="#" className="flex items-center gap-2 p-3 text-sm hover:bg-gray-100"> <Settings size={16}/> Pengaturan</a></li>
                            <li className="">
                                <button onClick={logout} className="w-full text-left flex items-center gap-2 p-3 text-sm hover:bg-red-50 text-red-600">
                                    <LogOut size={16}/> Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default HeaderUser;