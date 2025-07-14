import React from "react";
import { useNavigate } from "react-router-dom";

const CandidateDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const goToSlotBooking = () => {
    navigate("/candidate/slots");
  };

  return (
    <div style={styles.container}>
      <h2>Welcome to Your Dashboard 🎉</h2>

      <div style={styles.card}>
        <h4>Upcoming Interview</h4>
        <p>No interviews scheduled yet.</p>
      </div>

      <button style={styles.primaryBtn} onClick={goToSlotBooking}>
        Book an Interview Slot
      </button>

      <button style={styles.logoutBtn} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "2rem auto",
    padding: "2rem",
    fontFamily: "sans-serif",
    backgroundColor: "#f2f2f2",
    borderRadius: "8px",
  },
  card: {
    padding: "1rem",
    backgroundColor: "#fff",
    marginBottom: "1rem",
    borderRadius: "6px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  primaryBtn: {
    backgroundColor: "#1976D2",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "1rem",
  },
  logoutBtn: {
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default CandidateDashboard;
