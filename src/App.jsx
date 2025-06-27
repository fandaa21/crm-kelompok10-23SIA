import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./Pages/Dashboard";
import CustomerManagement from "./pages/CustomerManagement";
import ReportMoney from "./pages/ReportMoney";
import Feedback from "./pages/Feedback";
import StaffShift from "./Staff/StaffShift";
import Reservation from "./pages/Reservation";

export function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customer" element={<CustomerManagement />} />
        <Route path="/Report" element={<ReportMoney />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="*" element={<div>Page Not Found</div>} />
        <Route path="/Staff" element={<StaffShift />} />
        <Route path="/Reservation" element={<Reservation />} />
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
