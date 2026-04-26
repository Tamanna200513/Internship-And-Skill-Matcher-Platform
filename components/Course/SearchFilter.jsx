"use client";

import React, { useState, useEffect } from "react";

const SearchFilter = ({ courses = [], setFilteredCourses }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (typeof setFilteredCourses === "function") {
      setFilteredCourses(courses);
    }
  }, [courses, setFilteredCourses]);

  const handleSearch = (value) => {
    setSearch(value);

    if (!value.trim()) {
      setFilteredCourses(courses);
      return;
    }

    const filtered = courses.filter((course) =>
      course?.title?.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredCourses(filtered);
  };

  return (
    <div className="flex flex-col items-center mb-10">

      <div className="w-full max-w-2xl text-center mb-6">
        <h1 className="text-3xl font-bold text-white mt-4">
          Explore Our Curated Course Library
        </h1>
        <p className="text-gray-300 mt-2">
          Find the perfect course to boost your skills and land your dream internship.
        </p>
      </div>

      <div className="w-full flex justify-center mt-4">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full max-w-xl px-5 py-3 rounded-full 
          bg-white/10 backdrop-blur-md border border-white/20 
          text-white placeholder-gray-300 
          focus:outline-none focus:ring-2 focus:ring-blue-500transition"
        />
      </div>

    </div>
  );
};

export default SearchFilter;