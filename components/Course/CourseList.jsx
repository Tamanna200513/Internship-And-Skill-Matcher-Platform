"use client";

import React from "react";
import CourseCard from "./CourseCard";

const CourseList = ({ courses }) => {
  if (!courses.length) {
    return (
      <p className="text-center text-gray-300 mt-10 mb-10">
        No courses found 😢
      </p>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
      {courses.map((course) => (
        <CourseCard key={course._id || course.videoUrl} course={course} />
      ))}
    </div>
  );
};

export default CourseList;