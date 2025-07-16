import React, { useEffect, useState } from "react";

const dummyCandidates = [
  { id: 1, name: "Aarya Soni", email: "aarya@example.com", status: "pending" },
  { id: 2, name: "Jane Doe", email: "jane@example.com", status: "pending" },
  { id: 3, name: "John Smith", email: "john@example.com", status: "pending" },
];

const ReviewQueue = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    // Simulate fetching from API or localStorage
    const saved = localStorage.getItem("candidateQueue");
    if (saved) {
      setCandidates(JSON.parse(saved));
    } else {
      setCandidates(dummyCandidates);
      localStorage.setItem("candidateQueue", JSON.stringify(dummyCandidates));
    }
  }, []);

  const updateStatus = (id, newStatus) => {
    const updated = candidates.map((c) =>
      c.id === id ? { ...c, status: newStatus } : c
    );
    setCandidates(updated);
    localStorage.setItem("candidateQueue", JSON.stringify(updated));

    // Simulate updating approvalStatus for candidate (only one candidate for now)
    if (id === 1) localStorage.setItem("approvalStatus", newStatus);
  };

  return (
    <div style={styles.container}>
      <h2>HR Review Queue</h2>
      {candidates.length === 0 ? (
        <p>No candidates pending review.</p>
      ) : (
        <ul style={styles.list}>
          {candidates.map((candidate) => (
            <li key={candidate.id} style={styles.card}>
              <h4>{candidate.name}</h4>
              <p>Email: {candidate.email}</p>
              <p>Status: <strong>{candidate.status}</strong></p>
              {candidate.status === "pending" ? (
                <div>
                  <button
                    style={styles.approve}
                    onClick={() => updateStatus(candidate.id, "approved")}
                  >
                    Approve
                  </button>
                  <button
                    style={styles.reject}
                    onClick={() => updateStatus(candidate.id, "rejected")}
                  >
                    Reject
                  </button>
                </div>
              ) : (
                <p style={{ color: candidate.status === "approved" ? "green" : "red" }}>
                  Already {candidate.status}.
                </p>
              )}
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
    background: "#f1f5f9",
    minHeight: "100vh",
    fontFamily: "sans-serif",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  card: {
    backgroundColor: "#fff",
    padding: "1rem 1.5rem",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    marginBottom: "1rem",
  },
  approve: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "0.5rem",
  },
  reject: {
    backgroundColor: "#dc3545",
    color: "#fff",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ReviewQueue;
