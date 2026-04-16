"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function CompanyDetailsPage() {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) fetchCompany();
  }, [id]);

  const fetchCompany = async () => {
    try {
      const res = await fetch(`/api/companies/${id}`);
      if (!res.ok) throw new Error("Company not found");

      const data = await res.json();
      setCompany(data);
    } catch (error) {
      console.error(error);
      setCompany(null);
    } finally {
      setLoading(false);
    }
  };

  // LOADING
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <p className="text-xl font-semibold animate-pulse">
          🚀 Loading company details...
        </p>
      </div>
    );
  }

  // ERROR
  if (!company) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Company not found
        </h2>
        <Link href="/companies" className="bg-black text-white px-6 py-3 rounded-xl">
          ← Back
        </Link>
      </div>
    );
  }

  // ✅ MAIN UI
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 px-4 md:px-10 py-10">

      {/* HERO */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg border border-slate-200 p-8 md:p-10 mt-5">
        <div className="flex flex-col md:flex-row gap-8 items-center">

          {/* Logo */}
          <div className="w-28 h-28 flex items-center justify-center bg-slate-50 rounded-2xl border shadow">
            {company.logo ? (
              <img src={company.logo} className="max-h-20 object-contain" />
            ) : (
              <div className="text-4xl font-bold text-blue-600">
                {company.name?.charAt(0)}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-slate-900">
              {company.name}
            </h1>

            <p className="text-slate-600 mt-3 text-lg max-w-3xl">
              {company.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">
                📍 {company.location}
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm">
                💼 {company.category}
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">
                🏢 {company.companyType}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 w-full md:w-auto">
            {company.careersLink && (
              <a
                href={company.careersLink}
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-center font-semibold"
              >
                🚀 Apply Now
              </a>
            )}

            <Link
              href="/companies"
              className="bg-slate-200 px-6 py-3 rounded-xl text-center font-semibold"
            >
              Back
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto mt-10 grid lg:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-8">

          {/* Eligibility */}
          <div className="bg-white rounded-3xl shadow-md p-8 border">
            <h2 className="text-2xl font-bold mb-6">🎯 Eligibility Criteria</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                ["Qualification", company.eligibility?.qualification],
                ["Batch", company.eligibility?.batch],
                ["Marks", company.eligibility?.marksCriteria],
                ["Backlogs", company.eligibility?.backlogCriteria],
              ].map(([label, value], i) => (
                <div key={i}>
                  <p className="text-sm text-slate-500">{label}</p>
                  <p className="font-semibold text-lg">
                    {value || "N/A"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Roles */}
          <div className="bg-white rounded-3xl shadow-md p-8 border">
            <h2 className="text-2xl font-bold mb-6">💼 Roles Offered</h2>

            <div className="flex flex-wrap gap-3">
              {company.rolesOffered?.map((role, i) => (
                <span key={i} className="px-4 py-2 bg-slate-100 rounded-full">
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Selection Process */}
          <div className="bg-white rounded-3xl shadow-md p-8 border">
            <h2 className="text-2xl font-bold mb-8">🚀 Selection Process</h2>

            <div className="border-l-2 border-blue-500 pl-6 space-y-8">
              {company.rounds?.map((round, i) => (
                <div key={i} className="relative">

                  <div className="absolute -left-[34px] top-1 w-5 h-5 bg-blue-600 rounded-full border-4 border-white"></div>

                  <div className="bg-slate-50 rounded-xl p-5">
                    <p className="text-sm text-blue-600 font-semibold">
                      Round {i + 1}
                    </p>
                    <h3 className="text-lg font-bold mt-1">
                      {round.title}
                    </h3>
                    <p className="text-slate-600 mt-2">
                      {round.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-3xl shadow-md p-8 border">
            <h2 className="text-2xl font-bold mb-6">🌟 Benefits</h2>

            <div className="space-y-3">
              {company.benefits?.map((b, i) => (
                <div key={i} className="bg-slate-50 border rounded-xl px-4 py-3">
                  ✅ {b}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="sticky top-6 h-fit">

          <div className="bg-white rounded-3xl shadow-lg border p-6">

            <h2 className="text-xl font-bold mb-5">🛠 Required Skills</h2>

            <div className="flex flex-wrap gap-2">
              {company.skillsRequired?.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-blue-100 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 border-t pt-5 space-y-2 text-sm">
              <p><b>Location:</b> {company.location}</p>
              <p><b>Category:</b> {company.category}</p>
              <p><b>Type:</b> {company.companyType}</p>
            </div>

            <div className="mt-6 space-y-3">
              <a
                href={company.careersLink}
                target="_blank"
                className="block w-full text-center bg-green-600 text-white py-3 rounded-xl"
              >
                Apply Now
              </a>

              <Link
                href="/companies"
                className="block w-full text-center bg-slate-900 text-white py-3 rounded-xl"
              >
                ← Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}