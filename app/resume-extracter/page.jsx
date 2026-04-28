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

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-gray-900 to-gray-800">
      <h1 className="text-3xl font-bold mb-2 text-center text-white mt-6">
        Resume Skill Extractor
      </h1>
      <p className="text-center text-gray-300 mb-10 text-lg">
        Upload your resume to extract skills and find matching companies
      </p>

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
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105"
          >
            📚 Recommend Learning Playlist
          </button>
        </div>
      )}
    </div>
  );
}