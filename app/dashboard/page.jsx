"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  // 🔒 protect route
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) return <p>Loading...</p>;
  if (!user) return null;

  return (
    <div style={{ padding: "40px" }}>
      <h1>Student Dashboard 🎯</h1>

      <div style={cardWrap}>
        <div style={card}>
          <h3>👤 Profile</h3>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>

        <div style={card}>
          <h3>📄 Resume</h3>
          <p>Upload & manage your resume</p>
          <button style={btn}>Upload Resume</button>
        </div>

        <div style={card}>
          <h3>🔍 Skill Match</h3>
          <p>Find internships by skills</p>
          <button style={btn}>Match Now</button>
        </div>

        <div style={card}>
          <h3>💼 Internships</h3>
          <p>Browse available internships</p>
          <button style={btn}>View Internships</button>
        </div>
      </div>
    </div>
  );
}

const cardWrap = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "30px",
};

const card = {
  border: "1px solid #ddd",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const btn = {
  marginTop: "10px",
  padding: "8px 14px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  background: "#0070f3",
  color: "#fff",
};

