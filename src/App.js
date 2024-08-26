import "./App.css";
import "./TestimonialSlider.css"; // Ensure this is the correct path
import Home from './pages/Home';
import Profile from "./pages/Host/Profile";
import Logout from "./pages/Logout";
import Cabdetails from "./pages/Host/Cabdetails ";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashboard/Dashboard";
import PaymentPage from "./pages/PaymentPage";
import HostDashboard from "./pages/Dashboard/HostDashboard";
import Transactions from "./pages/Host/Transactions"; // Make sure this file exists
import TechnicalSupport from "./pages/Host/TechnicalSupport"; // Make sure this file exists
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarDetails from "./pages/CarDetails";
import { ToastContainer } from 'react-toastify'; // Uncomment if needed

function App() {
  return (
    <Router>
      <ToastContainer autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookings" element={<Booking />} />
        <Route path="/cabdetails" element={<Cabdetails />} />
        <Route path="/cardetails" element={<CarDetails />} />

        <Route path="/transactions" element={<Transactions />} />
        <Route path="/technical-support" element={<TechnicalSupport />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/hostdashboard" element={<HostDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
