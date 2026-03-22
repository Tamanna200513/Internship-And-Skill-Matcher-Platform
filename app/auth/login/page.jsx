"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {

  const router = useRouter();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message);
        return;
      }

      // ✅ Save user in AuthContext
      login(data.user);

      // ✅ redirect to dashboard
      router.push("/dashboard");

    } catch (error) {
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">

        <h2>Login</h2>

        <p className="auth-subtitle">
          Welcome back! Please login to continue
        </p>

        <form className="auth-form" onSubmit={handleLogin}>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <div className="options">
            <span className="forgot">
              Forgot Password?
            </span>
          </div>

          <button className="primary-btn" type="submit">
            Log In
          </button>

        </form>

        {message && (
          <p style={{ color: "red", marginTop: "10px" }}>
            {message}
          </p>
        )}

        <p className="switch-text">
          Don’t have an account?{" "}
          <Link href="/auth/register">
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
}