"use client";
import { useState } from "react";

export default function UploadResume({ onUpload }) {
  const [fileName, setFileName] = useState("");

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);
    onUpload && onUpload(file); // parent ko bhej diya
  };

  return (
    <div className="bg-white text-black rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-semibold mb-4">Upload Resume</h2>

      <div className="border-2 border-dashed border-blue-400 p-6 rounded-xl text-center hover:bg-blue-50 transition">
        <p className="mb-2 text-gray-600">Drag & Drop your resume</p>

        <label className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600">
          Choose File
          <input
            type="file"
            className="hidden"
            onChange={handleFile}
          />
        </label>
      </div>

      {fileName && (
        <p className="mt-4 text-green-600 text-sm">
          ✅ {fileName} uploaded successfully
        </p>
      )}
    </div>
  );
}