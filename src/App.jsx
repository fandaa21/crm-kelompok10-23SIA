import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./Pages/Dashboard";
import CustomerManagement from "./pages/CustomerManagement";

export function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customer" element={<CustomerManagement />} />
      </Route>
    </Routes>
  );
}
export default App;
