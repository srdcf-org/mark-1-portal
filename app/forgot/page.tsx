"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"email" | "otp" | "reset">("email");
  const [message, setMessage] = useState("");

  async function sendOtp() {
    setMessage("Sending OTP...");
    const res = await fetch("/api/otp/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (data.success) {
      setStep("otp");
      setMessage("OTP sent to your email.");
    } else {
      setMessage(data.error || "Failed to send OTP.");
    }
  }

  async function verifyOtp() {
    setMessage("Verifying OTP...");
    const res = await fetch("/api/otp/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });

    const data = await res.json();
    if (data.success) {
      setStep("reset");
      setMessage("OTP verified. Set new password.");
    } else {
      setMessage(data.error || "Invalid OTP.");
    }
  }

  return (
    <main style={{ maxWidth: 400, margin: "60px auto", padding: 20 }}>
      <h2>Reset Password</h2>

      {step === "email" && (
        <>
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter registered email"
            style={{ width: "100%", padding: 8, marginBottom: 12 }}
          />
          <button style={{ width: "100%" }} onClick={sendOtp}>
            Send OTP
          </button>
        </>
      )}

      {step === "otp" && (
        <>
          <label>Enter OTP</label>
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="4-digit OTP"
            style={{ width: "100%", padding: 8, marginBottom: 12 }}
          />
          <button style={{ width: "100%" }} onClick={verifyOtp}>
            Verify OTP
          </button>
        </>
      )}

      {step === "reset" && (
        <>
          <p>OTP Verified. Password reset form will be added next.</p>
        </>
      )}

      {message && <p style={{ marginTop: 10 }}>{message}</p>}
    </main>
  );
}
