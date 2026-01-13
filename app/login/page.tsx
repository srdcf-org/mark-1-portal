"use client";
import { useState } from "react";
import OtpInput from "../components/OtpInput";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"email" | "otp">("email");
  const [loading, setLoading] = useState(false);

  async function sendOtp() {
    if (!email) {
      alert("Enter email first");
      return;
    }
    setLoading(true);
    await fetch("/api/otp/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setLoading(false);
    setStep("otp");
  }

  async function verifyOtp(otp: string) {
    const res = await fetch("/api/otp/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });
    const data = await res.json();
    if (data.success) {
      alert("Login successful");
      // later: redirect to dashboard
    } else {
      alert("Invalid OTP");
    }
  }

  return (
    <main style={{ padding: 40, maxWidth: 400, margin: "0 auto" }}>
      <h1>SRDCF Candidate Login</h1>

      {step === "email" && (
        <>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: 8, marginBottom: 12 }}
          />
          <button onClick={sendOtp} disabled={loading}>
            {loading ? "Sending..." : "Send OTP"}
          </button>
        </>
      )}

      {step === "otp" && <OtpInput onSubmit={verifyOtp} />}
    </main>
  );
}
