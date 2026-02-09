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
    <section className="bg-slate-50 flex justify-center">
      <div className="max-w-6xl w-full px-6">
        {/* center grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {features.map((item, i) => (
            <div
              key={i}
              className="
                w-full max-w-sm
                bg-white
                rounded-2xl
                p-8
                text-center
                shadow-md
                hover:shadow-xl
                transition
                duration-300
                hover:-translate-y-2
              "
            >
              <div className="text-4xl mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



