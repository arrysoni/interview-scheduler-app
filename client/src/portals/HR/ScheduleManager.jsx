import React, { useEffect, useState } from "react";

const ScheduleManager = () => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    const allSlots = JSON.parse(localStorage.getItem("allInterviewSlots")) || [];
    setSlots(allSlots);
  }, []);

  const handleCancel = (index) => {
    const updatedSlots = [...slots];
    updatedSlots.splice(index, 1);
    setSlots(updatedSlots);
    localStorage.setItem("allInterviewSlots", JSON.stringify(updatedSlots));
  };

  return (
    <div style={styles.container}>
      <h2>Scheduled Interviews</h2>
      {slots.length === 0 ? (
        <p>No interviews scheduled yet.</p>
      ) : (
        <ul style={styles.slotList}>
          {slots.map((slot, index) => (
            <li key={index} style={styles.slotItem}>
              <div>
                <strong>Candidate:</strong> {slot.candidateName} <br />
                <strong>Slot:</strong> {slot.slot}
              </div>
              <button style={styles.cancelBtn} onClick={() => handleCancel(index)}>
                Cancel
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    background: "#f5f5f5",
    minHeight: "100vh",
  },
  slotList: {
    listStyle: "none",
    padding: 0,
    marginTop: "1rem",
  },
  slotItem: {
    background: "#fff",
    padding: "1rem",
    marginBottom: "1rem",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cancelBtn: {
    backgroundColor: "#e53935",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ScheduleManager;
