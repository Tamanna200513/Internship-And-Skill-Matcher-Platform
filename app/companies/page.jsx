"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CompaniesPage() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const res = await fetch("/api/companies");
      const data = await res.json();
      setCompanies(data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Filter logic
  const filteredCompanies = companies.filter((company) => {
    const matchesSearch = company.name
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());

   const matchesType =
  selectedType === "All" ||
  company.companyType?.toLowerCase().trim() === selectedType.toLowerCase().trim();

    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen  from-slate-100  px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-white mb-3 mt-4">
        🚀 Explore Top Companies
      </h1>
      <p className="text-center text-white mb-10 text-lg">
        Discover companies, required skills, and hiring rounds
      </p>

      {/* ✅ Filter UI */}
      <div className="max-w-5xl mx-auto mb-8 flex flex-col md:flex-row gap-4 justify-center items-center ">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search company name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-5 py-3 text-white rounded-xl bg-blue/80 border border-gray-600 shadow-lg placeholder-gray-400 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
        />

        {/* Company Type Filter */}
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="w-full md:w-1/3 px-5 py-3 text-white rounded-xl bg-blue/80  border border-gray-600 shadow-lg placeholder-gray-400 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
        >
          <option className="text-black" value="All">All Company Types</option>
          <option className="text-black" value="Service Based">Service Based</option>
          <option className="text-black" value="Product Based">Product Based</option>
        </select>
      </div>

      <br />

      {loading ? (
        <p className="text-center text-lg text-gray-600">Loading companies...</p>
      ) : filteredCompanies.length === 0 ? (
        <p className="text-center text-gray-600">No matching companies found.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {filteredCompanies.map((company) => (
            <div
              key={company._id}
              className="bg-white/10 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-white/20 flex flex-col justify-between hover:-translate-y-2"
            >
              {/* Logo */}
              <div className="flex justify-center mb-4 mt-3 text-white">
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-16 object-contain text-white"
                  />
                ) : (
                  <div className="h-16 w-16 rounded-full text-white flex items-center justify-center text-2xl font-bold text-blue-600">
                    {company.name?.charAt(0)}
                  </div>
                )}
              </div>

              {/* Company Info */}
              <div className="text-center flex-grow">
                <h2 className="text-3xl font-bold text-slate-800 mb-3 text-white">
                  {company.name}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-5 min-h-[60px] text-white">
                  {company.description}
                </p>

                <div className="space-y-3 text-[17px] text-slate-700 text-white">
                  <p>
                    <span className="font-semibold text-slate-900 text-white">📍 Location:</span>{" "}
                    {company.location}
                  </p>

                  <p>
                    <span className="font-semibold text-slate-900 text-white">💼 Category:</span>{" "}
                    {company.category}
                  </p>

                  <p>
                    <span className="font-semibold text-slate-900 text-white">🏢 Type:</span>{" "}
                    {company.companyType}
                  </p>

                  <p className="min-h-[52px]">
                    <span className="font-semibold text-slate-900 text-white">🛠 Skills:</span>{" "}
                    {company.skillsRequired?.join(", ")}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-8 justify-center items-center mb-3">

                <Link
                  href={`/companies/${company._id}`}
                  className="text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md !no-underline text-sm font-medium"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}