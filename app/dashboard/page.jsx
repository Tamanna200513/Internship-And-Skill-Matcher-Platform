"use client";

import { useState } from "react";
import ResumeUpload from "@/components/Dashboard/ResumeUpload";

export default function Dashboard() {
  const [skills, setSkills] = useState([]);

  return (
    <div>
      <h1>Dashboard</h1>

      <ResumeUpload setSkills={setSkills} />

      <div>
        <h2>Your Skills:</h2>
        {skills.join(", ")}
      </div>
    </div>
  );
}