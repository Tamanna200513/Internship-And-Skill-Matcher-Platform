"use client";

import React, { useEffect, useState } from "react";
import SearchFilter from "@/components/course/SearchFilter";
import CourseList from "@/components/course/CourseList";

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setError("");
        const res = await fetch("/api/course");
        const data = await res.json();

        if (data.success && Array.isArray(data.data)) {
          setCourses(data.data);
          setFilteredCourses(data.data);
        } else if (Array.isArray(data)) {
          // Handle old format for backward compatibility
          setCourses(data);
          setFilteredCourses(data);
        } else {
          setError(data.message || "Failed to fetch courses");
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError("Network error. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen px-6 py-10 text-white">
      
      {/* ✅ Error Message */}
      {error && (
        <div className="max-w-6xl mx-auto mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          ❌ {error}
        </div>
      )}

      {/* ✅ Loading State */}
      {loading ? (
        <div className="text-center py-10">
          <p className="text-lg text-gray-400">⏳ Loading courses...</p>
        </div>
      ) : error ? (
        <div className="text-center py-10">
          <p className="text-lg text-gray-400">Unable to load courses. Please try refreshing the page.</p>
        </div>
      ) : (
        <>
          {/* ✅ Yahan function pass ho raha hai */}
          <SearchFilter
            courses={courses}
            setFilteredCourses={setFilteredCourses}
          />

          <CourseList courses={filteredCourses}/>
        </>
      )}
    </div>
  );
};

export default CoursePage;