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
      <div className="min-h-screen flex items-center justify-center ">
        <p className="text-xl font-semibold animate-pulse text-white">
          🚀 Loading company details...
        </p>
      </div>
    );
  }

  // ERROR
  if (!company) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-red-600 mb-4 text-white">
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
    <div className="min-h-screen from-slate-100 to-slate-200 px-4 md:px-10 py-10">

      {/* HERO */}
      <div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl shadow-lg border border-white/20 p-8 md:p-10 mt-5">
        <div className="flex flex-col md:flex-row gap-8 items-center">

          {/* Logo */}
          <div className="w-28 h-28 flex items-center justify-center rounded-2xl border shadow">
            {company.logo ? (
              <img src={company.logo} className="max-h-20 object-contain" />
            ) : (
              <div className="text-4xl font-bold text-white">
                {company.name?.charAt(0)}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-slate-900 text-white">
              {company.name}
            </h1>

            <p className="text-slate-600 mt-3 text-lg max-w-3xl text-white">
              {company.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
              <span className="px-4 py-2  text-blue-700 rounded-full text-sm text-white">
                📍 {company.location}
              </span>
              <span className="px-4 py-2 text-green-700 rounded-full text-sm text-white">
                💼 {company.category}
              </span>
              <span className="px-4 py-2 text-purple-700 rounded-full text-sm text-white">
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
                className="hover:bg-blue-700 text-white px-2 py-1 rounded-xl text-center font-semibold !no-underline text-sm"
              >
                🚀 Apply Now
              </a>
            )}

            <Link
              href="/companies"
              className="hover:bg-blue-700 text-white px-2 py-1 rounded-xl text-center font-semibold !no-underline text-sm"
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
<div style={{ marginTop: "80px" }}></div> {/* 👈 gap */}
          {/* Eligibility */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-md p-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-white">🎯 Eligibility Criteria</h2>

           <div className="grid md:grid-cols-2 gap-6 text-white">

  {/* Qualification */}
  <div>
    <p className="text-sm">Qualification</p>
    <p className="font-semibold text-lg">
      {company.eligibility?.qualification?.join(", ") || "N/A"}
    </p>
  </div>

  {/* Batch */}
  <div>
    <p className="text-sm">Batch</p>
    <p className="font-semibold text-lg">
      {company.eligibility?.batch?.join(", ") || "N/A"}
    </p>
  </div>

  {/* Marks Criteria */}
  <div>
    <p className="text-sm">Marks Criteria</p>
    <div className="font-semibold text-lg space-y-1">
      {company.eligibility?.marksCriteria &&
        Object.entries(company.eligibility.marksCriteria).map(([key, value]) => (
          <p key={key}>
            {key}: {value}
          </p>
        ))}
    </div>
  </div>

  {/* Backlogs */}
  <div>
    <p className="text-sm">Backlogs</p>
    <p className="font-semibold text-lg">
      {company.eligibility?.backlogCriteria || "N/A"}
    </p>
  </div>

</div>
          </div>
<div style={{ marginTop: "80px" }}></div> {/* 👈 gap */}
          {/* Roles */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-md p-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-white">💼 Roles Offered</h2>

            <div className="flex flex-wrap gap-3">
              {company.rolesOffered?.map((role, i) => (
                <span key={i} className="px-4 py-2 rounded-full text-white">
                  {role}
                </span>
              ))}
            </div>
          </div>
<div style={{ marginTop: "80px" }}></div> {/* 👈 gap */}
          {/* Selection Process */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-md p-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-8 text-white">🚀 Selection Process</h2>

            <div className="border-l-2 pl-6 space-y-8">
              {company.rounds?.map((round, i) => (
                <div key={i} className="relative">

                  <div className="absolute -left-[34px] top-1 w-5 h-5 rounded-full border-4 border-white"></div>

                  <div className="rounded-xl p-5">
                    <p className="text-sm text-white font-semibold">
                      Round {i + 1}
                    </p>
                    <h3 className="text-lg text-white font-bold mt-1">
                      {round.title}
                    </h3>
                    <p className="text-white mt-2">
                      {round.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
<div style={{ marginTop: "80px" }}></div> {/* 👈 gap */}
          {/* Benefits */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-md p-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-white">🌟 Benefits</h2>

            <div className="space-y-3">
              {company.benefits?.map((b, i) => (
                <div key={i} className="text-white border rounded-xl px-4 py-3">
                  ✅ {b}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="sticky top-6 h-fit">

          <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-lg border border-white/20 p-6 mt-5">

            <h2 className="text-xl font-bold mb-5 text-white">🛠 Required Skills</h2>

            <div className="flex flex-wrap gap-2">
              {company.skillsRequired?.map((skill, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-sm text-white">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 border-t pt-5 space-y-2 text-sm text-white">
              <p><b>Location:</b> {company.location}</p>
              <p><b>Category:</b> {company.category}</p>
              <p><b>Type:</b> {company.companyType}</p>
            </div>

            <div className="mt-6 space-y-3">
              <a
                href={company.careersLink}
                target="_blank"
                className="block w-full text-center hover:bg-blue-700 text-white py-3 rounded-xl font-semibold !no-underline text-sm"
              >
                Apply Now
              </a>

              <Link
                href="/companies"
                className="block w-full text-center hover:bg-slate-700 text-white py-3 rounded-xl font-semibold !no-underline text-sm"
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