import nodemailer from "nodemailer";

const otpStore = new Map<
  string,
  { otp: string; expires: number; attempts: number }
>();

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return Response.json({ error: "Email required" }, { status: 400 });
  }

  // Rate limit: max 3 attempts
  const existing = otpStore.get(email);
  if (existing && existing.attempts >= 3) {
    return Response.json(
      { error: "Too many OTP attempts. Try again later." },
      { status: 429 }
    );
  }

  // 4-digit OTP
  const otp = Math.floor(1000 + Math.random() * 9000).toString();
  const expires = Date.now() + 10 * 60 * 1000; // 10 minutes

  otpStore.set(email, {
    otp,
    expires,
    attempts: existing ? existing.attempts : 0,
  });

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"SRDCF System" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your SRDCF OTP",
    text: `Your OTP is ${otp}. Valid for 10 minutes.`,
  });

  return Response.json({ success: true });
}

// Export store for verify API
export { otpStore };
