import nodemailer from "nodemailer";
import { otpStore } from "../store";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return Response.json({ error: "Email required" }, { status: 400 });
  }

  const otp = Math.floor(1000 + Math.random() * 9000).toString(); // 4 digit
  const expires = Date.now() + 10 * 60 * 1000; // 10 min

  otpStore.set(email, { otp, expires, attempts: 0 });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `SRDCF System <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your SRDCF OTP",
    text: `Your OTP is ${otp}. Valid for 10 minutes.`,
  });

  return Response.json({ success: true });
}
