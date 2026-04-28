"use client";

import React from "react";

const CourseCard = ({ course }) => {
    return (
        <div className="bg-white/10 backdrop-blur-lg border border-white/10 
    rounded-xl overflow-hidden shadow-md hover:scale-105 hover:shadow-xl 
    transition duration-300 translate-y-10 cursor-pointer mx-2">

            {/* ✅ Thumbnail FIX */}
            <div className="w-full h-40 flex items-center justify-center">
                {course.thumbnail ? (
                    <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="max-h-full max-w-full object-contain mt-4"
                    />
                ) : (
                    <div className="text-gray-400 text-sm">
                        No Image
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-3 text-white">
                <h2 className="text-sm font-semibold line-clamp-2">
                    {course.title}
                </h2>

                {/* Instructor */}
                {course.instructor && (
                    <div className="flex items-center gap-2 mt-2">

                        {course.instructorImg ? (
                            <img
                                src={course.instructorImg}
                                className="w-6 h-6 rounded-full border"
                                alt="instructor"
                            />
                        ) : (
                            <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-xs">
                                {course.instructor.charAt(0)}
                            </div>
                        )}

                        <span className="text-xs text-gray-300">
                            {course.instructor}
                        </span>
                    </div>
                )}

                {/* Button */}
                <a
                    href={course.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-3 mx-auto text-center bg-blue-400 hover:bg-blue-500 
                    text-white py-1.5 px-2 rounded-md text-sm transition !no-underline w-fit"
                >
                    Watch Now
                </a>
            </div>
        </div>
    );
};

export default CourseCard;