"use client";

import React from "react";
import { FaBuilding, FaMapMarkerAlt, FaRupeeSign, FaBriefcase } from "react-icons/fa";

export default function InternshipCards() {
  const internships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Amazon",
      location: "Remote",
      stipend: "₹30,000 / month",
    },
    {
      id: 2,
      title: "Backend Intern",
      company: "Samsung",
      location: "Delhi",
      stipend: "₹19,000 / month",
    },
    {
      id: 3,
      title: "AI / ML Intern",
      company: "Google",
      location: "Bangalore",
      stipend: "₹50,000 / month",
    },
  ];

  return (
    <section className="internshipSection">
      <h2 className="sectionTitle">
        <FaBriefcase style={{ marginRight: 8 }} />
        Latest Internships
      </h2>

      <div className="cardGrid">
        {internships.map((item) => (
          <div key={item.id} className="internshipCard">
            <h3>{item.title}</h3>

            <p>
              <FaBuilding /> <strong> Company:</strong> {item.company}
            </p>

            <p>
              <FaMapMarkerAlt /> <strong> Location:</strong> {item.location}
            </p>

            <p>
              <FaRupeeSign /> <strong> Stipend:</strong> {item.stipend}
            </p>

            <button className="applyBtn">Apply Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}
