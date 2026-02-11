// components/BottomStats.jsx
"use client";
import React from "react";

export default function BottomStats() {
  return (
    <section className="bg-[#e6eeff] py-30 flex justify-center">
      
      <div className="bg-white shadow-xl rounded-5xl px-16 py-20 
                      flex flex-col md:flex-row gap-56 text-center ">
        
        <div>
          <h2 className="text-4xl font-extrabold text-blue-800">5,000+</h2>
          <p className="text-gray-500 mt-4">Internships Listed</p>
        </div>

        <div>
          <h2 className="text-4xl font-extrabold text-blue-800">10,000+</h2>
          <p className="text-gray-500 mt-2">Students Placed</p>
        </div>

        <div>
          <h2 className="text-4xl font-extrabold text-blue-800">500+</h2>
          <p className="text-gray-500 mt-2">Companies Partnered</p>
        </div>

      </div>
    </section>
  );
}
