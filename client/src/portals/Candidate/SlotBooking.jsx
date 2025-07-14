import React, { useState } from "react";
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

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setConfirmationMessage("");
  };

  const handleConfirm = () => {
    if (!selectedSlot) {
      setConfirmationMessage("Please select a time slot.");
      return;
    }

    // Store slot in localStorage (replace with API call later)
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
    maxWidth: "600px",
    margin: "2rem auto",
    padding: "2rem",
    fontFamily: "sans-serif",
    backgroundColor: "#f2f2f2",
    borderRadius: "8px",
  },
  slotList: {
    listStyle: "none",
    padding: 0,
  },
  slotItem: {
    padding: "1rem",
    marginBottom: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    cursor: "pointer",
  },
  button: {
    padding: "0.75rem 1rem",
    backgroundColor: "#4CAF50",
    color: "#fff",
    fontSize: "1rem",
    border: "none",
    borderRadius: "4px",
    marginTop: "1rem",
    cursor: "pointer",
  },
};

export default SlotBooking;
