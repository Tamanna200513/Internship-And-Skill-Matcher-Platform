"use client";

import { useState } from "react";

export default function ResumeUpload({ setSkills }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("resume", file);

    const res = await fetch("/api/resume", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    // ✅ 1. State update
    setSkills(data.skills);

    // ✅ 2. LocalStorage me save (IMPORTANT 🔥)
    localStorage.setItem(
      "userSkills",
      JSON.stringify(data.skills)
    );
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleUpload}>
        Upload Resume
      </button>
    </div>
  );
}