import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [interviewSlot, setInterviewSlot] = useState(null);
  const [approvalStatus, setApprovalStatus] = useState("pending");

  useEffect(() => {
    const savedSlot = localStorage.getItem("interviewSlot");
    const status = localStorage.getItem("approvalStatus");

    if (savedSlot) setInterviewSlot(savedSlot);
    if (status) setApprovalStatus(status);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("interviewSlot");
    localStorage.removeItem("approvalStatus");
    navigate("/login");
  };

  const goToSlotBooking = () => {
    navigate("/candidate/slots");
  };

  return (
    <div style={styles.container}>
      <h2>Welcome to Your Dashboard 🎉</h2>

      <div style={styles.card}>
        <h4>Interview Status</h4>
        {interviewSlot ? (
          <p><strong>Slot Booked:</strong> {interviewSlot}</p>
        ) : approvalStatus === "approved" ? (
          <p>You’ve been approved by HR! 🎯</p>
        ) : approvalStatus === "rejected" ? (
          <p style={{ color: "red" }}>Unfortunately, your application was not accepted.</p>
        ) : (
          <p>Your application is under review by HR.</p>
        )}
      </div>

      {!interviewSlot && approvalStatus === "approved" && (
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


export default Dashboard;
