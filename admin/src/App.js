import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
    </Routes>
  );
}
