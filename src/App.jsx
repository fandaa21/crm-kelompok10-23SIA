import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./Pages/Dashboard";
import SalesManagement from "./pages/SalesManagement";
import Login from "./pages/Signin"; 
import Signup from "./pages/Signup";

export function App() {
  return (
    <Routes>
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
         <Route path="/penjualan" element={<SalesManagement />} />
      </Route>
    </Routes>
  );
}
export default App;
