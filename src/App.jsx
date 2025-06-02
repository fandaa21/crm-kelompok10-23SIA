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
    </Routes>
  );
}
export default App;
