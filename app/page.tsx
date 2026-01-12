"use client";
import { useState } from "react";
import Link from "next/link";

const fieldStyle = {
  width: "100%",
  padding: "12px",
  fontSize: "16px",
  borderRadius: "6px",
  border: "1px solid #999",
  boxSizing: "border-box" as const,
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  fontSize: "16px",
  borderRadius: "6px",
  border: "1px solid #999",
  cursor: "pointer",
  background: "#f2f2f2",
};

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Login with: ${username}`);
  };

  return (
    <div style={{ maxWidth: 420, margin: "80px auto", textAlign: "center" }}>
      <h1>SRDCF Candidate Portal</h1>
      <p>Login for already registered & approved candidates</p>

      <form onSubmit={handleLogin}>
        <label>Username (ENR No. or Phone No.)</label>
        <input
          type="text"
          placeholder="Enter ENR or Phone Number"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ ...fieldStyle, margin: "10px 0 20px" }}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ ...fieldStyle, margin: "10px 0 20px" }}
          required
        />

        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>

      <div style={{ margin: "15px 0" }}>
        <Link href="/forgot-password">Forgot / Reset Password?</Link>
      </div>

      <p>New Candidate?</p>
      <Link href="/signup">
        <button style={buttonStyle}>Register (New Candidate)</button>
      </Link>
    </div>
  );
}
