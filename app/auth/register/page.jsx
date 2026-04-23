"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

export default function SignupForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/auth/login");
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      setError("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      
     <div className="absolute inset-0">
  <img
    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
    alt="bg"
    className="w-full h-full object-cover"
  />
</div>

     

      {/* Glow Effects */}
      <div className="absolute w-[400px] h-[300px] bg-purple-500/30 rounded-full blur-3xl top-10 left-10 animate-pulse" />
      <div className="absolute w-[400px] h-[300px] bg-pink-500/30 rounded-full blur-3xl bottom-10 right-10 animate-pulse" />

      {/* Signup Card */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.2)] w-full max-w-md border border-white/20"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Create Account ✨
        </h2>

        <form onSubmit={handleSignup} className="space-py-10">

          {/* Name */}
          <div className="relative">
            <User className="absolute left-1 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
               onChange={(e) => setName(e.target.value)}
              className="w-full p-4 pl-12 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-1 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 pl-12 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-1 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 pl-12 pr-12 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-400"
              required
            />

            {/* 👁️ Show/Hide */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-300 cursor-pointer"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white p-4 rounded-xl font-semibold shadow-lg"
          >
            {loading ? "Creating Account..." : "Signup"}
          </motion.button>
        </form>

        {/* Login Redirect */}
        <p className="text-sm text-center mt-4 text-gray-200">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/auth/login")}
            className="text-pink-400 cursor-pointer font-semibold"
          >
            Login
          </span>
        </p>
      </motion.div>
    </div>
  );
}