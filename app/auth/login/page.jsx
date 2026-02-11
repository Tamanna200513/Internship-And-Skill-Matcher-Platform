"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();   // ✅ add this

  const handleLogin = async (e) => {
    e.preventDefault();

    // 🔹 abhi demo ke liye fake user set kar rahe
    const fakeUser = {
      name: "Student",
      email: "student@test.com",
      role: "student",
    };

    login(fakeUser);             // ✅ THIS LINE FIXES NAVBAR
    router.push("/dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <p className="auth-subtitle">
          Welcome back! Please login to continue
        </p>

        <form className="auth-form" onSubmit={handleLogin}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <div className="options">
            <span className="forgot">Forgot Password?</span>
          </div>

          <button className="primary-btn" type="submit">
            Log In
          </button>
        </form>

        <p className="switch-text">
          Don’t have an account?{" "}
          <Link href="/auth/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}



