import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Box,
  BarChart2,
  Settings,
  LogIn,
  UserPlus,
  Bed,
  Presentation,
  MessageSquare, // untuk Feedback
  AlertCircle,   // untuk Komplain
  UserCog,        // untuk Staff (ikon tambahan)
  CalendarCheck, // ✅ untuk Reservasi
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { name: 'Dashboard', icon: <LayoutDashboard />, path: '/' },
  { name: 'Produk', icon: <Box />, path: '/produk' },
  { name: 'Laporan Keuangan', icon: <BarChart2 />, path: '/Report' },
  { name: 'Feedback', icon: <MessageSquare />, path: '/Feedback' },
  { name: 'Users', icon: <Users />, path: '/customer' },
  { name: 'Penjualan', icon: <ShoppingCart />, path: '/penjualan' },
  { name: 'Staff & Shift', icon: <UserCog />, path: '/Staff' },
  { name: 'Reservasi', icon: <CalendarCheck />, path: '/Reservation' },
  { name: 'Penjualan', icon: <ShoppingCart />, path: '/penjualan' },
  { name: 'Management Kamar ', icon: <Bed/>, path: '/room' },
  { name: 'Management Event ', icon: <Presentation />, path: '/event' },
  { name: 'User ', icon: <Users />, path: '/users' },
  
]

const accountItems = [
  { name: "Pengaturan Akun", icon: <Settings size={18} />, path: "/akun" },
  { name: "Sign In", icon: <LogIn size={18} />, path: "/signin" },
  { name: "Sign Up", icon: <UserPlus size={18} />, path: "/signup" },
];

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="bg-white w-64 h-screen shadow-lg px-5 py-8 hidden md:block border-r border-gray-100">
      <div className="text-2xl font-bold mb-10 text-indigo-700 tracking-wide">
        Aryaduta CRM
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
    </aside>
  );
};

export default Sidebar;
