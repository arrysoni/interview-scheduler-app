import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import InterviewFeedback from "./portals/HR/InterviewFeedback"; 

// Candidate Portal
import CandidateDashboard from "./portals/Candidate/Dashboard";
import SlotBooking from "./portals/Candidate/SlotBooking";

// HR Portal
import ReviewQueue from "./portals/HR/ReviewQueue";

// Admin Portal
import AdminDashboard from "./portals/Admin/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Candidate Portal */}
        <Route path="/candidate/dashboard" element={<CandidateDashboard />} />
        <Route path="/candidate/slots" element={<SlotBooking />} />

        {/* HR Portal */}
        <Route path="/hr/review" element={<ReviewQueue />} />

        {/* Admin Portal */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

         {/* HR Portal */}
        <Route path="/hr/feedback" element={<InterviewFeedback />} />
      </Routes>
    </Router>
  );
};

export default App;
