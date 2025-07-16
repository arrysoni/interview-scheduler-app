import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const dummySlots = [
  "2025-08-01 10:00 AM",
  "2025-08-01 02:30 PM",
  "2025-08-02 11:00 AM",
  "2025-08-03 04:00 PM",
];

const SlotBooking = () => {
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  useEffect(() => {
    const approvalStatus = localStorage.getItem("approvalStatus"); // <- Check here
    if (approvalStatus !== "approved") {
      alert("Access denied: Awaiting HR approval.");
      navigate("/candidate/dashboard");
    }
  }, [navigate]);
  
  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setConfirmationMessage("");
  };

  const handleConfirm = () => {
    if (!selectedSlot) {
      setConfirmationMessage("Please select a time slot.");
      return;
    }

    localStorage.setItem("interviewSlot", selectedSlot);
    setConfirmationMessage("Slot booked successfully! 🎉");

    setTimeout(() => {
      navigate("/candidate/dashboard");
    }, 1500);
  };

  return (
    <div style={styles.container}>
      <h2>Book Your Interview Slot</h2>
      <ul style={styles.slotList}>
        {dummySlots.map((slot, index) => (
          <li
            key={index}
            style={{
              ...styles.slotItem,
              backgroundColor: selectedSlot === slot ? "#d0ebff" : "#fff",
            }}
            onClick={() => handleSlotSelect(slot)}
          >
            {slot}
          </li>
        ))}
      </ul>
      {confirmationMessage && <p>{confirmationMessage}</p>}
      <button onClick={handleConfirm} style={styles.button}>
        Confirm Slot
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
    background: "linear-gradient(to right, #667eea, #764ba2)",
    color: "#fff",
  },
  slotList: {
    listStyle: "none",
    padding: 0,
    marginBottom: "1rem",
    width: "100%",
    maxWidth: "400px",
  },
  slotItem: {
    padding: "1rem",
    marginBottom: "0.5rem",
    backgroundColor: "#fff",
    color: "#333",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    textAlign: "center",
    fontWeight: "500",
    transition: "background-color 0.2s",
  },
  button: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#28a745",
    color: "#fff",
    fontSize: "1rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default SlotBooking;
