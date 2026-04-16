"use client";

export default function MatchedCompanies({ applications }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-blue-700">
        Your Applications
      </h2>

      <ul className="space-y-4">
        {applications?.map((app, i) => (
          <li key={i} className="flex justify-between border-b pb-2">
            <div>
              <p className="font-medium">{app.company}</p>
              <p className="text-sm text-gray-500">{app.role}</p>
            </div>
            <span className="text-sm text-gray-400">{app.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}