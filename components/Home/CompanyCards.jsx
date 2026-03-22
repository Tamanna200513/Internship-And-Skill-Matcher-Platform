"use client";
import { FaBuilding, FaMapMarkerAlt, FaRupeeSign, FaBriefcase } from "react-icons/fa";

export default function InternshipCards() {
  const internships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechNova",
      location: "Remote",
      stipend: "₹8,000 / month",
      type: "Part Time"
    },
    {
      id: 2,
      title: "Backend Developer Intern",
      company: "CodeCraft",
      location: "Delhi",
      stipend: "₹10,000 / month",
      type: "Full Time"
    },
    {
      id: 3,
      title: "AI/ML Intern",
      company: "FutureAI",
      location: "Bangalore",
      stipend: "₹12,000 / month",
      type: "Remote"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10 translate-xl">
         Recommended Companies for You
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {internships.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>

              <p className="flex items-center text-gray-600 mb-2">
                <FaBuilding className="mr-2 text-blue-600" />
                {item.company}
              </p>

              <p className="flex items-center text-gray-600 mb-2">
                <FaMapMarkerAlt className="mr-2 text-red-500" />
                {item.location}
              </p>

              <p className="flex items-center text-gray-600 mb-2">
                <FaRupeeSign className="mr-2 text-green-600" />
                {item.stipend}
              </p>

              <p className="flex items-center text-gray-600 mb-4">
                <FaBriefcase className="mr-2 text-purple-600" />
                {item.type}
              </p>

              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
