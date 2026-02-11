"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    
    router.push("/auth/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <p className="auth-subtitle">
          Access your internship opportunities
        </p>

        <form className="auth-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Create Password" />
          <input type="password" placeholder="Confirm Password" />

          <button className="primary-btn" type="button" onClick={() => router.push("/auth/login")}>Sign Up</button>
        </form>

        <p className="switch-text">
          Already have an account?{" "}
          <Link href="/auth/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

