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
    <div className="min-h-screen from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-10">
      
      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">
          Resume Skill Extractor
        </h1>
        <p className="text-gray-400 text-lg">
          Upload your resume to extract skills and find matching companies
        </p>
      </div>

      {/* TOP SECTION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
        <ResumeUpload setSkills={setSkills} setCompanies={setCompanies} />
        <ExtractedSkills skills={skills} />
      </div>

      {/* COMPANIES SECTION */}
      <div className="max-w-6xl mx-auto mb-12 mt-5">
        <MatchedCompanies companies={companies} />
      </div>

      {/* BUTTON */}
      {skills.length > 0 && (
        <div className="text-center">
          <button
            onClick={() => router.push("/course")}
            className=" px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition transform hover:scale-105 mt-5"
          >
            📚 Recommend Learning Playlist
          </button>
        </div>
      )}

    </div>
  );
}