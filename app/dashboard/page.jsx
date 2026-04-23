"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Dashboard() {
  const { user } = useAuth();
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);

  const topScore = companies[0]?.matchScore || 0;

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const uploadRes = await fetch("/api/upload-resume", {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadRes.json();

      const skillRes = await fetch("/api/extract-skills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filePath: uploadData.path,
        }),
      });

      const skillData = await skillRes.json();

      const matchRes = await fetch("/api/match-internships", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          skills: skillData.skills,
        }),
      });

      const matchData = await matchRes.json();

      setCompanies(matchData.matched);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen text-white px-6 py-8">

      {/* 🔝 Header */}
      <h1 className="text-3xl font-bold mb-8">
        Welcome back, {user?.name || "User"} 👋
      </h1>

      {/* 📊 Top Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        {/* Progress Card */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex flex-col items-center">
          <div className="w-24 h-24 mb-4">
            <CircularProgressbar value={topScore} text={`${topScore}%`} />
          </div>
          <p className="text-lg">Top Match Score</p>
        </div>

        {/* Upload Card */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex flex-col justify-center">
          <h2 className="text-lg font-semibold mb-3">Upload Resume</h2>

          <input
            type="file"
            onChange={handleUpload}
            className="bg-white/20 p-2 rounded w-full"
          />

          {loading && (
            <p className="text-purple-400 mt-2 text-sm">
              Processing...
            </p>
          )}
        </div>

        {/* Stats Card */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
          <h3 className="text-lg mb-3">Stats</h3>

          <div className="space-y-2 text-gray-200">
            <p>📄 Uploads: 1</p>
            <p>🎯 Matches: {companies.length}</p>
          </div>
        </div>

      </div>

      {/* 💼 Internships */}
      <div>
        <h2 className="text-2xl mb-6 font-semibold">
          Top Matched Internships 🚀
        </h2>

        {!loading && companies.length === 0 && (
          <p className="text-gray-300">
            Upload resume to see matched internships
          </p>
        )}

        <div className="grid md:grid-cols-3 gap-6">

          {companies.map((c) => (
            <div
              key={c._id}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="font-bold text-lg">{c.name}</h3>
              <p className="text-gray-300">{c.role}</p>

              {/* Match Bar */}
              <div className="mt-3">
                <div className="h-2 bg-white/20 rounded-full">
                  <div
                    className="h-2 bg-purple-500 rounded-full"
                    style={{ width: `${c.matchScore}%` }}
                  ></div>
                </div>
                <p className="text-sm mt-1 text-purple-300">
                  {c.matchScore}% Match
                </p>
              </div>

              <p className="text-sm text-gray-300 mt-3">
                {c.matchedSkills?.join(", ")}
              </p>

              <a href={c.careersLink} target="_blank">
                <button className="mt-4 w-full bg-purple-600 py-2 rounded-lg hover:bg-purple-700 transition">
                  Apply Now
                </button>
              </a>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}