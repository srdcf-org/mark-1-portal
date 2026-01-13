import { otpStore } from "../store";

export async function POST(req: Request) {
  const { email, otp } = await req.json();

  if (!email || !otp) {
    return Response.json({ error: "Email and OTP required" }, { status: 400 });
  }

  const data = otpStore.get(email);

  if (!data) {
    return Response.json({ error: "No OTP found" }, { status: 400 });
  }

  if (Date.now() > data.expires) {
    otpStore.delete(email);
    return Response.json({ error: "OTP expired" }, { status: 400 });
  }

  if (data.attempts >= 3) {
    otpStore.delete(email);
    return Response.json({ error: "Max attempts exceeded" }, { status: 400 });
  }

  if (data.otp !== otp) {
    data.attempts += 1;
    otpStore.set(email, data);
    return Response.json({ error: "Invalid OTP" }, { status: 400 });
  }

  otpStore.delete(email);
  return Response.json({ success: true });
}
