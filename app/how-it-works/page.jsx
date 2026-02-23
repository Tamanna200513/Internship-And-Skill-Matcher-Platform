import Image from "next/image";

export default function HowItWorks() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center translate-x-30 translate-y-5">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
          How It Works
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Get Hired in{" "}
          <span className="text-blue-600 font-semibold">
            5 Easy Steps
          </span>
        </p>
      </section>

      {/* Steps Section */}
      <section className="max-w-6xl mx-auto px-6 pb-12 translate-x-30 translate-y-">
        <div className="grid md:grid-cols-3 gap-6">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition duration-300"
            >
              <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs mb-2">
                Step {index + 1}
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {step.title}
              </h3>

              <p className="text-gray-600 mb-3 text-sm">
                {step.desc}
              </p>

              <div className="relative w-full h-32">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}

const steps = [
  {
    title: "Sign Up & Create Profile",
    desc: "Register and build your professional profile.",
    img: "/images/createProfile.png",
  },
  {
    title: "AI Skill Analysis",
    desc: "AI analyzes your skills like React, Python & more.",
    img: "/images/Analysis.png",
  },
  {
    title: "Get Matched",
    desc: "Get internship recommendations from top companies.",
    img: "/images/Matching.png",
  },
  {
    title: "Apply in One Click",
    desc: "Submit instantly and track your applications.",
    img: "/images/Apply.png",
  },
  {
    title: "Get Hired",
    desc: "Receive interview calls and job offers.",
    img: "/images/GetHired.png",
  },
];