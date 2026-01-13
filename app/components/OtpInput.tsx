"use client";
import { useState } from "react";

export default function OtpInput({ onSubmit }: { onSubmit: (otp: string) => void }) {
  const [otp, setOtp] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <input
        type="text"
        value={otp}
        maxLength={4}
        placeholder="Enter 4-digit OTP"
        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
        style={{
          fontSize: 22,
          textAlign: "center",
          letterSpacing: 8,
          padding: 12,
          border: "1px solid #ccc",
          borderRadius: 6,
        }}
      />
      <button
        onClick={() => onSubmit(otp)}
        disabled={otp.length !== 4}
        style={{
          padding: 10,
          background: otp.length === 4 ? "#000" : "#aaa",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: otp.length === 4 ? "pointer" : "not-allowed",
        }}
      >
        Verify OTP
      </button>
    </div>
  );
}
