import { Route, Routes } from "react-router-dom";

// Layout dan halaman admin
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import CustomerManagement from "./pages/CustomerManagement";
import SalesManagement from "./pages/SalesManagement";
import Customers from "./pages/Customers";
import Feedback from "./pages/Feedback";

// Halaman autentikasi
import Login from "./pages/Signin";

// Layout dan halaman untuk User Website
import LayoutUser from "./User/component/LayoutUser";
import UserDashboard from "./User/UserDashboard";
import RoomReservation from "./User/RoomReservation";
import UserPage from "./User/UserPage";
import AboutUsPage from "./User/AboutUsPage";
import RoomDetailPage from "./User/RoomDetailPage";
import PublicLayout from "./User/component/PublicLayout";
import ContactPage from "./User/ContactPage";
import Reservation from "./pages/Reservation";
import GuestsPage from "./pages/GuestPage";
import Deals from "./pages/Deals";
import RoomManagement from "./pages/RoomManager";
import ReportMoney from "./pages/ReportMoney";
import MembershipManagement from "./pages/MembershipManagement";
import { Toaster } from 'react-hot-toast';
import LoyaltyPrediction from "./pages/LoyaltyPredictionDashboard";
import LoyaltyPredictionDashboard from "./pages/LoyaltyPredictionDashboard";

export function App() {
  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
    <Routes>
      {/* Halaman login */}
      <Route path="/signin" element={<Login />} />

      {/* Layout dan halaman admin */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer" element={<CustomerManagement />} />
        <Route path="/penjualan" element={<SalesManagement />} />
        <Route path="/pelanggan" element={<Customers />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/room" element={<RoomManagement />} />
        <Route path="/report" element={<ReportMoney />} />
        <Route path="/memberships" element={<MembershipManagement />} />
        <Route path="/loyalty-prediction" element={<LoyaltyPredictionDashboard/>} />
        <Route path="/GuestPage" element={<GuestsPage />} />
        <Route path="/Deals" element={<Deals />} />
      </Route>

      {/* Layout dan halaman user */}
      <Route element={<LayoutUser />}>
        <Route path="/User" element={<UserDashboard />} />
        <Route path="/User/Reservasi" element={<RoomReservation />} />
      </Route>

      <Route element={<PublicLayout />}>
        <Route path="/" element={<UserPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/room/1" element={<RoomDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
