export default function Features() {
  const features = [
    {
      title: "Skill-Based Matching",
      desc: "Personalized internship recommendation",
      icon: "🔍",
    },
    {
      title: "Easy Application",
      desc: "Apply with your resume in clicks",
      icon: "📄",
    },
    {
      title: "For Students & Recruiters",
      desc: "Connecting talent with opportunities",
      icon: "👥",
    },
  ];

  return (
  <section className="flex justify-center">
    <div className="max-w-6xl w-full px-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {features.map((item, i) => (
          <div
            key={i}
            className="
              w-full max-w-sm
              rounded-2xl
              backdrop-blur-md
              shadow-lg
              p-8
              text-center
              text-white
              transition duration-300
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >
            <div className="text-4xl mb-4 flex justify-center">
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-gray-200 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>
);
}



