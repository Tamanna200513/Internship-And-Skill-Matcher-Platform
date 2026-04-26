"use client";

import ResumeUpload from "@/components/ResumeExtracter/ResumeUpload";
import MatchedCompanies from "@/components/ResumeExtracter/MatchedCompanies";
import ExtractedSkills from "@/components/ResumeExtracter/ExtractedSkills";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ResumeExtractorPage() {
  const [skills, setSkills] = useState([]);
  const [companies, setCompanies] = useState([]);
  const router = useRouter();

  const handleUpload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await fetch("/api/extract", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    console.log("API Response:", data);

    // ✅ YAHI CONNECTION HAI
    setSkills(data.skills || []);
    setCompanies(data.companies || []);

  } catch (error) {
    console.error("Error:", error);
  }
};

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6 text-center text-white mt-6">Resume Extracter</h1>
      <p className="text-center text-white mb-10 text-lg">Upload your resume to extract skills and find matching companies</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* LEFT SIDE */}
        <div className="space-y-4">
          <ResumeUpload setSkills={setSkills} setCompanies={setCompanies} />
          <ExtractedSkills skills={skills} />
        </div>

        {/* RIGHT SIDE */}
        <div>
          <MatchedCompanies companies={companies} />
        </div>
      </div>

      {/* BUTTON */}
      {skills.length > 0 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => router.push("/course")}
            className="bg-blue-600 text-white px-6 py-2 rounded"
          >
            Recommend Playlist
          </button>
        </div>
      )}
    </div>
  );
}