"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) return <div className="p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">
        Welcome, {user.name} 👋
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

        {/* Resume Status */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            Resume Status
          </h2>

          {user.resumeUploaded ? (
            <p className="text-green-600 font-medium">
              ✅ Resume Uploaded
            </p>
          ) : (
            <p className="text-red-600 font-medium">
              ❌ Resume Not Uploaded
            </p>
          )}
        </div>

        {/* Total Applications */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            Total Applications
          </h2>

          <p className="text-4xl font-bold text-blue-600">
            {user.totalApplications}
          </p>
        </div>

        {/* Deadlines */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            Upcoming Deadlines
          </h2>

          {user.upcomingDeadlines?.map((item, index) => (
            <div
              key={index}
              className="flex justify-between bg-gray-50 p-3 rounded-lg mb-2"
            >
              <span>{item.company}</span>
              <span className="text-sm text-gray-500">
                {item.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}