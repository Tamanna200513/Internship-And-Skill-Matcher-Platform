"use client";

import { useState } from "react";

export default function Dashboard() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔥 Resume Upload Flow
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    try {
      // 1️⃣ Upload
      const formData = new FormData();
      formData.append("file", file);

      const uploadRes = await fetch("/api/upload-resume", {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadRes.json();
      console.log("Upload:", uploadData);

      // 2️⃣ Extract Skills
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
      console.log("Skills:", skillData);

      // 3️⃣ Match Internships
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
      console.log("Matched:", matchData);

      setCompanies(matchData.matched);

    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div
      className="flex min-h-screen text-white bg-cover bg-center text-center">


      {/* 🔹 Main */}
      <div className="flex-1 p-6 text-center max-w-5xl mx-auto">

        {/* 🔝 Top */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-center">
            Welcome back {/* You can replace this with dynamic user data */}Student!
          </h1>
        </div>

        {/* 📄 Upload */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl mb-6 max-w-md">
          <h2 className="mb-3 text-lg">Upload Resume</h2>

          <input
            type="file"
            onChange={handleUpload}
            className="bg-white/10 p-2 rounded"
          />
        </div>

        {/* 💼 Matched Internships */}
        <div>
          <h2 className="text-xl mb-4">Top Matched Internships</h2>

          <div className="grid md:grid-cols-3 gap-4">

            {loading && (
              <p className="text-purple-400">Processing Resume...</p>
            )}

            {!loading && companies.length === 0 && (
              <p className="text-gray-400">
                Upload resume to see matched internships 🚀
              </p>
            )}

            {companies.map((c) => (
              <div
                key={c._id}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-lg hover:scale-105 transition"
              >
                <h3 className="font-bold text-lg">{c.name}</h3>
                <p className="text-gray-400">{c.role}</p>

                <p className="text-green-400">
                  Match: {c.matchScore}%
                </p>

                <p className="text-sm text-gray-400">
                  {c.matchedSkills?.join(", ")}
                </p>

                <a href={c.careersLink} target="_blank">
                  <button className="mt-2 bg-purple-600 px-3 py-1 rounded hover:bg-purple-700">
                    Apply
                  </button>
                </a>
              </div>
            ))}

          </div>
        </div>

      </div>

    </div>
  );
}