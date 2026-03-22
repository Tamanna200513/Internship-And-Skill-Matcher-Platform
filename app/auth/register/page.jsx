"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {

  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message);
        return;
      }

      alert("Signup successful");

      router.push("/auth/login");

    } catch (error) {
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">

        <h2>Sign Up</h2>

        <p className="auth-subtitle">
          Access your internship opportunities
        </p>

        <form className="auth-form" onSubmit={handleSignup}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

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
            placeholder="Create Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          <button className="primary-btn" type="submit">
            Sign Up
          </button>

        </form>

        {message && (
          <p style={{ color: "red", marginTop: "10px" }}>
            {message}
          </p>
        )}

        <p className="switch-text">
          Already have an account?{" "}
          <Link href="/auth/login">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}