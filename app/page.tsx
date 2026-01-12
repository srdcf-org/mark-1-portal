import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Login Attempt\nUsername: ${username}\nPassword: ${password}`);
  };

  return (
    <div style={{ maxWidth: 400, margin: "80px auto", textAlign: "center" }}>
      <h1>SRDCF Candidate Portal</h1>
      <p>Login for already registered & approved candidates</p>

      <form onSubmit={handleLogin}>
        <label>Username (ENR No. or Phone No.)</label>
        <input
          type="text"
          placeholder="Enter ENR or Phone Number"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ width: "100%", padding: 12, margin: "10px 0" }}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: 12, margin: "10px 0" }}
        />

        <button
          type="submit"
          style={{ width: "100%", padding: 12, marginTop: 15 }}
        >
          Login
        </button>
      </form>

      <div style={{ marginTop: 15 }}>
        <Link href="/forgot-password">Forgot / Reset Password?</Link>
      </div>

      <div style={{ marginTop: 25 }}>
        <p>New Candidate?</p>
        <Link href="/signup">
          <button style={{ padding: "10px 25px" }}>
            Register (New Candidate)
          </button>
        </Link>
      </div>
    </div>
  );
}
