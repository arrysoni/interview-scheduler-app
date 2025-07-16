import React, { useState } from "react";

const InterviewFeedback = () => {
  const [candidateName, setCandidateName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState("pending");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!candidateName || !feedback) {
      setMessage("Please fill in all fields.");
      return;
    }

    // Save feedback to localStorage (can be replaced with API)
    const existing = JSON.parse(localStorage.getItem("interviewFeedback")) || [];
    existing.push({ candidateName, feedback, status });
    localStorage.setItem("interviewFeedback", JSON.stringify(existing));

    setMessage("✅ Feedback submitted!");
    setCandidateName("");
    setFeedback("");
    setStatus("pending");
  };

  return (
    <div style={styles.container}>
      <h2>Interview Feedback Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Candidate Name"
          value={candidateName}
          onChange={(e) => setCandidateName(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Write feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          style={{ ...styles.input, height: "120px" }}
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={styles.select}
        >
          <option value="pending">Pending</option>
          <option value="move-forward">Move Forward</option>
          <option value="reject">Reject</option>
        </select>
        <button type="submit" style={styles.button}>
          Submit Feedback
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    background: "linear-gradient(to right, #ffecd2, #fcb69f)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
    maxWidth: "500px",
  },
  input: {
    padding: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  select: {
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "6px",
  },
  button: {
    backgroundColor: "#1976D2",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1.25rem",
    fontSize: "1rem",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default InterviewFeedback;
