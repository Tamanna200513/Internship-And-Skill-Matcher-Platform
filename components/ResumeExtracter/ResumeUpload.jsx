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

    // Reset states
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

      console.log("API Response:", data);

      if (data.success) {
        setSkills(data.skills || []);
        setCompanies(data.matchedCompanies || []);
        setSuccess("✅ Resume processed successfully!");
        setTimeout(() => setSuccess(""), 3000);
      } else {
        const errorMessage = data.message || "Failed to process resume";
        setError(`❌ ${errorMessage}`);
        console.error("Error details:", data);
      }
    } catch (err) {
      console.error("Upload error:", err);
      setError("❌ Network error or server unavailable. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-black rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-semibold mb-4">📄 Upload Resume</h2>

      <div className="border-2 border-dashed border-blue-400 p-6 rounded-xl text-center hover:bg-blue-50 transition">
        <p className="mb-2 text-gray-600">Drag & Drop your resume (PDF)</p>

        <label className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 inline-block transition">
          {loading ? "Processing..." : "Choose PDF File"}
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleFileUpload}
            disabled={loading}
          />
        </label>
      </div>

      {error && (
        <p className="mt-4 text-red-600 text-sm p-3 bg-red-100 rounded">
          {error}
        </p>
      )}

      {success && (
        <p className="mt-4 text-green-600 text-sm p-3 bg-green-100 rounded">
          {success}
        </p>
      )}

      {fileName && !loading && !error && (
        <p className="mt-4 text-green-600 text-sm">
          ✅ {fileName}
        </p>
      )}

      {loading && (
        <p className="mt-4 text-blue-600 text-sm animate-pulse">
          ⏳ Processing your resume...
        </p>
      )}
    </div>
  );
}