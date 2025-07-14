import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Interview Scheduler</h1>
      <div style={styles.buttonContainer}>
        <Link to="/register">
          <button style={styles.button}>Register</button>
        </Link>
        <Link to="/login">
          <button style={{ ...styles.button, backgroundColor: "#444" }}>Login</button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #6dd5ed, #2193b0)",
    color: "#fff",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "2rem",
  },
  buttonContainer: {
    display: "flex",
    gap: "1rem",
  },
  button: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    backgroundColor: "#1976D2",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
};
