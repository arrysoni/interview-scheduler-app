import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Home</h1>
      <Link to="/register">
        <button style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
          Register
        </button>
      </Link>
      <br />
      <Link to="/login">
        <button style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
          Login
        </button>
      </Link>
    </div>
  );
}
