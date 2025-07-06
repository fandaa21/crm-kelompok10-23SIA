import {
  LayoutDashboard,
  Users,
  Box,
  BarChart2,
  LogIn,
  LogOut,
  MessageSquare,
  CalendarCheck, 
  Bed,
  TicketIcon,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logoAryaduta from '../assets/ardut.png';
  

// Menu utama setelah pembersihan
const menuItems = [
  { name: 'Dashboard', icon: <LayoutDashboard />, path: '/dashboard' },
  { name: 'Guest', icon: <Box />, path: '/GuestPage' },
  { name: 'Laporan Keuangan', icon: <BarChart2 />, path: '/Report' },
  { name: 'Feedback', icon: <MessageSquare />, path: '/Feedback' },
  { name: 'Reservasi', icon: <CalendarCheck />, path: '/Reservation' },
  { name: 'Management Kamar', icon: <Bed />, path: '/room' },
  { name: 'Memberships', icon: <Users />, path: '/memberships' },
];


const accountItems = [
  { name: "Sign In", icon: <LogIn size={18} />, path: "/signin" },
];

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const { logout } = useAuth();

  return (
    <aside className="bg-white w-64 h-screen shadow-lg px-5 py-8 hidden md:block border-r border-gray-100">
      <div className="text-2xl font-bold mb-10 text-indigo-700 tracking-wide">
        <img
          src={logoAryaduta}
          alt="Logo"
          className="w-52 mx-auto"
        />
      </div>

      {/* Menu Utama */}
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-all duration-200 ${
              isActive(item.path)
                ? "bg-indigo-200 text-indigo-800 font-semibold"
                : "text-gray-700"
            }`}
          >
            {item.icon}
            <span className="text-sm">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Section Akun */}
      <div className="mt-10 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Akun
      </div>
      <nav className="mt-2 space-y-1">
        {accountItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-all duration-200 ${
              isActive(item.path)
                ? "bg-indigo-200 text-indigo-800 font-semibold"
                : "text-gray-700"
            }`}
          >
            {item.icon}
            <span className="text-sm">{item.name}</span>
          </Link>
        ))}
      </nav>
      <nav className="mt-2 space-y-1">
            {/* Tombol Logout */}
            <button
                onClick={logout}
                className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-red-100 hover:text-red-700 transition-all duration-200"
            >
                <LogOut size={18} />
                <span className="text-sm">Logout</span>
            </button>
        </nav>
    </aside>
  );
};

export default Sidebar;
