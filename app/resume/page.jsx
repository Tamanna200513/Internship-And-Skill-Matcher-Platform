"use client";
import { useState } from "react";
import UploadResume from "@/components/UploadResume";

export default function ResumePage() {
  const [skills, setSkills] = useState([]);
  const [companies, setCompanies] = useState([]);

  return (
    <div className="p-6 grid md:grid-cols-2 gap-6">

      {/* ✅ IMPORTANT: onUpload pass karna hai */}
      <UploadResume
        onUpload={(data) => {
          setSkills(data.skills);
          setCompanies(data.matchedCompanies);
        }}
      />

      <div>
        <h2>Skills</h2>
        {skills.map((s, i) => (
          <p key={i}>{s}</p>
        ))}

        <h2>Companies</h2>
        {companies.map((c) => (
          <p key={c._id}>{c.name}</p>
        ))}
      </div>
    </div>
  );
}