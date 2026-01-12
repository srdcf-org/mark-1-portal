import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h1>SRDCF Candidate Portal</h1>
      <p>Login for already registered & approved candidates</p>

      <div style={{ marginTop: 30 }}>
        <Link href="/login">
          <button style={{ padding: "12px 30px", marginRight: 10 }}>
            Login
          </button>
        </Link>

        <Link href="/signup">
          <button style={{ padding: "12px 30px" }}>
            Register (New Candidate)
          </button>
        </Link>
      </div>
    </div>
  );
}
