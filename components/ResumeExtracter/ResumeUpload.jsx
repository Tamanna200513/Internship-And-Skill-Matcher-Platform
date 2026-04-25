"use client";

import { useState } from "react";

export default function ResumeUpload({ setSkills, setCompanies }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("resume", file);

    try {
      // ✅ 1. Upload resume
      const res = await fetch("/api/upload-resume", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Resume upload failed");
      }

      const extractedSkills = data.skills || [];

      // ✅ 2. Set extracted skills
      setSkills(extractedSkills);

      // ✅ 3. Match companies
      const matchRes = await fetch("/api/match-company", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // ⚠️ important
        },
        body: JSON.stringify({ skills: extractedSkills }),
      });

      const matchData = await matchRes.json();

      if (!matchRes.ok) {
        throw new Error(matchData.message || "Matching failed");
      }

      // ✅ FIX: matched use karo (not companies)
      setCompanies(matchData.matched || []);

    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h2 className="font-semibold text-lg mb-3">
        Upload Resume
      </h2>

      <input
        type="file"
        accept=".pdf"
        onChange={handleUpload}
        className="block w-full text-sm border p-2 rounded"
      />

      {loading && (
        <p className="text-blue-500 mt-2">
          Processing resume...
        </p>
      )}

      {error && (
        <p className="text-red-500 mt-2">
          {error}
        </p>
      )}
    </div>
  );
}