import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import CustomerManagement from "./pages/CustomerManagement";
import SalesManagement from "./pages/SalesManagement";
import Customers from "./pages/Customers"; 
import Login from "./pages/Signin"; 
import Signup from "./pages/Signup";
import ReportMoney from "./pages/ReportMoney";
import Feedback from "./pages/Feedback";
import UserDashboard from "./User/UserDashboard";
import LayoutUser from "./User/component/LayoutUser";
import RoomReservation from "./User/RoomReservation";
import UserPage from "./User/UserPage";

export function App() {
  return (
    <Routes>
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customer" element={<CustomerManagement />} />
        <Route path="/penjualan" element={<SalesManagement />} />
        <Route path="/pelanggan" element={<Customers />} />
        <Route path="/Report" element={<ReportMoney />} />
        <Route path="/Feedback" element={<Feedback />} />
      </Route>
      <Route element={<LayoutUser />}>
      <Route path="/User" element={<UserDashboard />} />
      <Route path="/User/Reservasi" element={<RoomReservation />} />
      </Route>

      <Route path="/web" element={<UserPage />} />
    </Routes>
  );
}
export default App;