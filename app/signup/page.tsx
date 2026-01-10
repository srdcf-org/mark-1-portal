"use client";
import { useState } from "react";

export default function SignupPage() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("Intern");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Signup Data:\nPhone: ${phone}\nName: ${name}\nRole: ${role}\nPassword: ${password}`
    );
  };

  return (
    <div style={{ maxWidth: 400, margin: "80px auto", textAlign: "center" }}>
      <h1>SRDCF Portal Signup</h1>

      <form onSubmit={handleSubmit}>
        <label>Phone Number (Permanent Username)</label>
        <input
          type="tel"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          style={{ width: "100%", padding: 10, margin: "10px 0" }}
        />
        <p style={{ fontSize: 12 }}>
          This will be your permanent username and cannot be changed later.
        </p>

        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: "100%", padding: 10, margin: "10px 0" }}
        />

        <label>Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ width: "100%", padding: 10, margin: "10px 0" }}
        >
          <option>Intern</option>
          <option>Volunteer</option>
          <option>Candidate</option>
          <option>Employee</option>
        </select>

        <label>Password</label>
        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: 10, margin: "10px 0" }}
        />

        <button
          type="submit"
          style={{ width: "100%", padding: 12, marginTop: 20 }}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
