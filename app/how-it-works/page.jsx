import Image from "next/image";

export default function HowItWorks() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center translate-x-36 translate-y-8">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
          How It Works
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Get Hired in{" "}
          <span className="text-blue-600 font-semibold">
            5 Easy Steps
          </span>
        </p>
      </section>

      {/* Steps Section */}
      <section className="max-w-7xl mx-auto px-8 py-14 mb-30 translate-x-35 translate-y-15">
        <div className="grid md:grid-cols-3 gap-6">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition duration-300"
            >
              <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 text-xl mb-3">
                Step {index + 1}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {step.desc}
              </p>

              <div className="relative w-full h-40">
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