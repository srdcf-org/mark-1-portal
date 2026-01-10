export default function LoginPage() {
  return (
    <main style={{ padding: 40, maxWidth: 400, margin: "0 auto" }}>
      <h1>SRDCF Portal Login</h1>

      <label>Phone Number (Permanent Username)</label>
      <input
        type="tel"
        placeholder="Enter your phone number"
        style={{ width: "100%", padding: 8, marginBottom: 6 }}
      />
      <p style={{ fontSize: 12, color: "gray", marginBottom: 14 }}>
        This will be your permanent username and cannot be changed later.
      </p>

      <label>Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        style={{ width: "100%", padding: 8, marginBottom: 20 }}
      />

      <button style={{ width: "100%", padding: 10 }}>
        Login
      </button>

      <p style={{ marginTop: 20, fontSize: 12, color: "gray" }}>
        Intern / Volunteer / Candidate / Employee Login
      </p>
    </main>
  );
}
