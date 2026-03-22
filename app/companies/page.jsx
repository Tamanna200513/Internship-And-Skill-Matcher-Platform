"use client";

import { useEffect, useState } from "react";
import { companiesData } from "@/data/companiesData";

export default function CompaniesPage() {
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  useEffect(() => {
    const storedSkills =
      JSON.parse(localStorage.getItem("userSkills")) || [];

    const filtered = companiesData.filter((company) =>
      company.skillsRequired.some((skill) =>
        storedSkills.includes(skill)
      )
    );

    setFilteredCompanies(filtered);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">
        🚀 Recommended Companies
      </h1>

      {/* No Data */}
      {filteredCompanies.length === 0 && (
        <p className="text-center text-gray-500">
          No matching companies found. Upload resume first.
        </p>
      )}

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCompanies.map((company, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5"
          >
            {/* Logo */}
            <img
              src={company.logo}
              alt={company.name}
              className="w-16 h-16 object-contain mb-3"
            />

            {/* Name */}
            <h2 className="text-xl font-semibold mb-1">
              {company.name}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-2">
              {company.description}
            </p>

            {/* Location */}
            <p className="text-sm text-gray-500 mb-2">
              📍 {company.location}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-3">
              {company.skillsRequired.map((skill, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Apply Button */}
            <button
              onClick={() =>
                window.open(company.careersLink, "_blank")
              }
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}