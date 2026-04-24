"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { image } from "framer-motion/client";

const teamMembers = [
  {
    name: "Deepanshi Sharma",
    image: "/images/Deepanshi.jpeg",
    role: "AI & Recommendation Engineer",
    linkedin: "https://www.linkedin.com/in/deepanshi-sharma-81465b2a6",
    bio: "Develops the core recommendation engine that matches students with internships using skills and AI-driven logic."
  },
  {
    name: "Himanshi",
    image: "/images/Himanshi.jpeg",
    role: "Frontend & UI/UX Lead",
    linkedin: "https://www.linkedin.com/in/himanshi-70387231a",
    bio: "Designs clean and user-friendly interfaces using Next.js ensuring smooth experience."
  },
  {
    name: "Tamanna Tiwari",
    image: "/images/Tamanna.jpeg",
    role: "Data & Skill Validation Lead",
    linkedin: "https://www.linkedin.com/in/tamanna-tiwari-017a2129b/",
    bio: "Validates skill data and internship requirements ensuring accurate matching."
  },
  {
    name: "Aarchie Verma",
    image: "/images/Aarchie.jpeg",
    role: "Product & Experience Designer",
    linkedin: "https://www.linkedin.com/in/archie-verma-b25b82218",
    bio: "Designs intuitive user flows that make internship discovery simple."
  }
];

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-transparent from-gray-50 relative overflow-hidden mt-24 mb-50">

      {/* Background blur circles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-white">
            Meet Our Team
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-white">
            Passionate creators building AI-powered internship solutions
            to help students discover the right opportunities.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {teamMembers.map((member, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="  rounded-2xl p-7 text-center border border-white/20 bg-white/10 backdrop-blur-md shadow-lg text-white transition duration-300 hover:shadow-2xl hover:-translate-y-2"
            >

              {/* Avatar */}
              <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center mx-auto mb-5 mt-3 mx-auto">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-lg font-bold text-gray-700">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-gray-900 text-white">
                {member.name}
              </h3>

              <p className="text-blue-600 text-sm font-medium mb-3 text-white">
                {member.role}
              </p>

              <p className="text-gray-600 text-sm mb-5 text-white">
                {member.bio}
              </p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-900 text-white hover:bg-blue-600 transition"
              >
                <FaLinkedin />
              </a>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}