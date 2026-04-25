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
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Resume Extracter</h1>

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