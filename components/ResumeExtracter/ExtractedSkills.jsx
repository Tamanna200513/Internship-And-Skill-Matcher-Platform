export default function ExtractedSkills({ skills = [] }) {

  const skillCategories = {
    frontend: ['react', 'vue', 'angular', 'svelte', 'next.js', 'nextjs', 'typescript', 'javascript', 'html', 'css', 'sass', 'tailwind', 'bootstrap'],
    backend: ['node.js', 'nodejs', 'node', 'express', 'django', 'flask', 'fastapi', 'java', 'spring', 'python', 'php', 'laravel', 'golang', 'go', 'rust', 'c++', 'c#', 'dotnet', '.net'],
    database: ['mongodb', 'mysql', 'postgresql', 'sql', 'firebase', 'redis', 'cassandra', 'elasticsearch', 'graphql'],
    devops: ['docker', 'kubernetes', 'aws', 'azure', 'gcp', 'ci/cd', 'jenkins', 'gitlab', 'github', 'git', 'terraform', 'ansible'],
    other: ['machine learning', 'ml', 'ai', 'deep learning', 'tensorflow', 'pytorch', 'nlp', 'api', 'rest', 'microservices', 'agile', 'scrum']
  };

  const getCategory = (skill) => {
    for (const [category, list] of Object.entries(skillCategories)) {
      if (list.some(s => s.toLowerCase() === skill.toLowerCase())) {
        return category;
      }
    }
    return "other";
  };

  const categoryStyles = {
    frontend: "bg-purple-500/20 text-purple-300",
    backend: "bg-blue-500/20 text-blue-300",
    database: "bg-green-500/20 text-green-300",
    devops: "bg-orange-500/20 text-orange-300",
    other: "bg-gray-500/20 text-gray-300"
  };

  // group skills
  const grouped = skills.reduce((acc, skill) => {
    const cat = getCategory(skill);
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 text-white rounded-2xl p-6 shadow-xl transition-all duration-300 mt-5">

      {/* HEADER */}
      <div className="mb-5 text-center mt-4">
        <h2 className="text-xl font-semibold">
          Extracted Skills ({skills.length})
        </h2>
        <p className="text-xs text-gray-400">
          Found in your resume
        </p>
      </div>

      {skills.length === 0 ? (
        <p className="text-center py-10 text-gray-400">
          Upload a resume to extract skills
        </p>
      ) : (

        <div className="space-y-5">

          {Object.entries(grouped).map(([category, skillList]) => (
            <div key={category}>

              {/* CATEGORY TITLE */}
              <p className="text-xs uppercase text-white mb-2 tracking-wide font-semibold px-2 py-2">
                {category}
              </p>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-2 px-2 py-2">
                {skillList.map((skill, index) => (
                  <span
                    key={index}
                    className={`${categoryStyles[category]} px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}