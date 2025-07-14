import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CandidateDashboard = () => {
  const navigate = useNavigate();
  const [interviewSlot, setInterviewSlot] = useState(null);

  useEffect(() => {
    const savedSlot = localStorage.getItem("interviewSlot");
    if (savedSlot) {
      setInterviewSlot(savedSlot);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("interviewSlot");
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
        {interviewSlot ? (
          <p>{interviewSlot}</p>
        ) : (
          <p>No interviews scheduled yet.</p>
        )}
      </div>

      {!interviewSlot && (
        <button style={styles.primaryBtn} onClick={goToSlotBooking}>
          Book an Interview Slot
        </button>
      )}

      <button style={styles.logoutBtn} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    background: "linear-gradient(to right, #f6d365, #fda085)",
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    padding: "1.5rem 2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    marginBottom: "1.5rem",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  primaryBtn: {
    backgroundColor: "#1976D2",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1.25rem",
    fontSize: "1rem",
    borderRadius: "6px",
    cursor: "pointer",
    marginRight: "1rem",
  },
  logoutBtn: {
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1.25rem",
    fontSize: "1rem",
    borderRadius: "6px",
    cursor: "pointer",
  },
};


export default CandidateDashboard;
