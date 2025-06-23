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
import StaffShift from "./Staff/StaffShift";
import Reservation from "./pages/Reservation";
import RoomManager from "./pages/RoomManager";
import EventManager from "./pages/EventManager";
import User from "./pages/User";


export function App() {
  return (
    <Routes>
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customer" element={<CustomerManagement />} />
        <Route path="/pelanggan" element={<Customers />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="*" element={<div>Page Not Found</div>} />
        <Route path="/Reservation" element={<Reservation />} />
         <Route path="/penjualan" element={<SalesManagement />} />
         <Route path="/room" element={<RoomManager />} />
         <Route path="/users" element={<User />} />
         <Route path="/event" element={<EventManager />} />
      </Route>
    </Routes>
  );
}
export default App;
