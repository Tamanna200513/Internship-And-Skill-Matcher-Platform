"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer() {
  const { user, loading } = useAuth();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || loading) {
    return (
      <footer className="bg-gray-50 border-t py-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-400">Loading footer...</p>
        </div>
      </footer>
    );
  }

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "About Us", href: "/about" },
  ];

  if (user) {
    quickLinks.push(
      { name: "Dashboard", href: "/dashboard" },
      { name: "Internships", href: "/internships" },
      { name: "Placement Rounds", href: "/placement-rounds" }
    );
  }

  return (
    <footer className="bg-blue-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Internship & Skill Matcher
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Helping students discover the right internship opportunities
              based on their skills and career interests.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Contact
            </h3>

            <p className="text-sm text-gray-600 mb-1">
              📍 New Delhi, India
            </p>

            <p className="text-sm text-gray-600 mb-1">
              ✉ support@internshipandskillmatcher.com
            </p>

            <p className="text-sm text-gray-600 mb-4">
              📞 +91 98765 43210
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a className="p-2 bg-gray-200 rounded hover:bg-blue-600 hover:text-white transition">
                <FaFacebookF />
              </a>

              <a className="p-2 bg-gray-200 rounded hover:bg-sky-500 hover:text-white transition">
                <FaTwitter />
              </a>

              <a className="p-2 bg-gray-200 rounded hover:bg-pink-600 hover:text-white transition">
                <FaInstagram />
              </a>

              <a className="p-2 bg-gray-200 rounded hover:bg-blue-700 hover:text-white transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t mt-10 pt-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Internship & Skill Matcher
        </div>

      </div>
    </footer>
  );
}