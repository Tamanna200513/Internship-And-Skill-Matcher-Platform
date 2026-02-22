"use client";
import React from "react";

export default function About() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            About Us
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-16">
            We help students find the best internship opportunities based on their
            skills and career interests.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side Text */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Internship & Skill Matcher is a smart platform designed to connect
              students with the right internship opportunities. Our system
              analyzes your skills and matches you with internships that align
              with your career goals.
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to simplify the internship search process and help
              students grow by finding opportunities that truly match their
              skills and interests.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/free-vector/boy-with-smartphone-social-profile-commnication_24877-53919.jpg"
              alt="About Illustration"
             className="w-56 md:w-72 drop-shadow-xl"
            />
          </div>

        </div>

        {/* Features Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              🎯 Smart Matching
            </h3>
            <p className="text-gray-600">
              We match internships based on your skills and interests.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              🚀 Career Growth
            </h3>
            <p className="text-gray-600">
              Helping students grow with real-world experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              🤝 Easy Process
            </h3>
            <p className="text-gray-600">
              Simple, fast, and user-friendly platform.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}