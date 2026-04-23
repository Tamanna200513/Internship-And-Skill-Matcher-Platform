"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        console.log("Login success");
        router.push("/dashboard");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      
      {/* Background */}
      <div className="absolute inset-0"></div>

      {/* Animated Glow */}
      <div className="absolute w-[300px] h-[300px] bg-purple-500/30 rounded-full blur-3xl top-10 left-10 animate-pulse" />
      <div className="absolute w-[300px] h-[300px] bg-pink-500/30 rounded-full blur-3xl bottom-10 right-10 animate-pulse" />

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-[360px] border border-white/20"
      >
        
        {/* Header with Cut Button */}
        <div className="flex items-center justify-center mb-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-white"
          >
              Welcome Back
          </motion.h2>

          {/* ❌ Button */}
          <button
            onClick={() => router.push("/auth/register")}
            className="w-8 h-8 flex items-right justify-center rounded-full bg-white/20 hover:bg-pink-500 transition text-white"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-400"
            required
          />

          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-400"
            required
          />

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white p-3 rounded-lg font-semibold shadow-lg"
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-center mt-4 text-gray-200"
        >
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/auth/register")}
            className="text-pink-400 cursor-pointer font-semibold"
          >
            Signup
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
}