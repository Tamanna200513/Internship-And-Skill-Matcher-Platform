"use client";

import React, { useEffect, useState } from "react";
import SearchFilter from "@/components/course/SearchFilter";
import CourseList from "@/components/course/CourseList";

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("/api/course");
        const data = await res.json();

        setCourses(data);
        setFilteredCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen px-6 py-10 text-white">
      
      {/* ✅ Yahan function pass ho raha hai */}
      <SearchFilter
        courses={courses}
        setFilteredCourses={setFilteredCourses}
      />

      <CourseList courses={filteredCourses}/>
    </div>
  );
};

export default CoursePage;