"use client";
import { useState } from "react";

export default function ResumeUpload({ setSkills, setCompanies }) {
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setError("");
    setSuccess("");
    setFileName(file.name);
    setLoading(true);

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await fetch("/api/upload-resume", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setSkills(data.skills || []);
        setCompanies(data.matchedCompanies || []);
        setSuccess("Resume processed successfully!");
        setTimeout(() => setSuccess(""), 3000);
      } else {
        setError(data.message || "Failed to process resume");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-400 rounded-2xl px-6 py-4 text-center transition-all duration-300 mt-5">

  {/* TEXT */}
  <p className="text-white text-3xl mb-2 mt-2 font-semibold">
    Upload your latest resume
  </p>

  <p className="text-gray-400 text-xl mb-5">
    AI-powered skill analysis & better matches
  </p>

  {/* BUTTON */}
  <label className="inline-block cursor-pointer">
    <span className="bg-blue-600 px-6 py-2 rounded-lg text-white font-medium hover:bg-blue-700 transition">
      {loading ? "Processing..." : "Upload Resume"}
    </span>

    <input
      type="file"
      accept=".pdf"
      className="hidden"
      onChange={handleFileUpload}
      disabled={loading}
    />
  </label>

  {/* FILE TYPE */}
  <p className="text-gray-400 text-sm mt-4">
    Supported format: PDF 
  </p>

</div>
  );
}