import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./Pages/Dashboard";
import CustomerManagement from "./pages/CustomerManagement";
import ReportMoney from "./pages/ReportMoney";
import Feedback from "./pages/Feedback";

export function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customer" element={<CustomerManagement />} />
        <Route path="/Report" element={<ReportMoney />} />
        <Route path="/Feedback" element={<Feedback />} />
      </Route>
    </Routes>
  );
}
export default App;
