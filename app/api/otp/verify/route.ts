import { otpStore } from "../send/route";

export async function POST(req: Request) {
  const { email, otp } = await req.json();

  const record = otpStore.get(email);

  if (!record) {
    return Response.json({ error: "No OTP found" }, { status: 400 });
  }

  if (Date.now() > record.expires) {
    otpStore.delete(email);
    return Response.json({ error: "OTP expired" }, { status: 400 });
  }

  if (record.attempts >= 3) {
    otpStore.delete(email);
    return Response.json({ error: "Too many attempts" }, { status: 400 });
  }

  if (record.otp !== otp) {
    record.attempts++;
    return Response.json({ error: "Invalid OTP" }, { status: 400 });
  }

  otpStore.delete(email);
  return Response.json({ success: true });
}
