// components/Footer.jsx
"use client";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-50 border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-700">

          <div>
            <h3 className="text-xl font-semibold mb-3 left:50%">
              Smart Internship & Skill Matcher
            </h3>
            <p className="text-sm leading-relaxed">
              Helping students find the right career path with AI-powered
              internship recommendations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">How it works</li>
              <li className="hover:text-blue-600 cursor-pointer">Features</li>
             
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Students</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">Find internships</li>
              <li className="hover:text-blue-600 cursor-pointer">Skill match</li>
              <li className="hover:text-blue-600 cursor-pointer">Resume tips</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Recruiters</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">Post internship</li>
              <li className="hover:text-blue-600 cursor-pointer">Find talent</li>
              <li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
            </ul>
          </div>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-12 text-2xl text-gray-600">
          <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
          <FaGithub className="hover:text-black cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500 mt-6">
          © 2026 Smart Internship & Skill Matcher. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
