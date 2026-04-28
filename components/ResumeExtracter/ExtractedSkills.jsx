export default function ExtractedSkills({ skills = [] }) {
  // Categorize skills
  const skillCategories = {
    frontend: ['react', 'vue', 'angular', 'svelte', 'next.js', 'nextjs', 'typescript', 'javascript', 'html', 'css', 'sass', 'tailwind', 'bootstrap'],
    backend: ['node.js', 'nodejs', 'node', 'express', 'django', 'flask', 'fastapi', 'java', 'spring', 'python', 'php', 'laravel', 'golang', 'go', 'rust', 'c++', 'c#', 'dotnet', '.net'],
    database: ['mongodb', 'mysql', 'postgresql', 'sql', 'firebase', 'redis', 'cassandra', 'elasticsearch', 'graphql'],
    devops: ['docker', 'kubernetes', 'aws', 'azure', 'gcp', 'ci/cd', 'jenkins', 'gitlab', 'github', 'git', 'terraform', 'ansible'],
    other: ['machine learning', 'ml', 'ai', 'deep learning', 'tensorflow', 'pytorch', 'nlp', 'api', 'rest', 'microservices', 'agile', 'scrum']
  };

  const getCategoryColor = (skill) => {
    for (const [category, skillList] of Object.entries(skillCategories)) {
      if (skillList.some(s => s.toLowerCase() === skill.toLowerCase())) {
        switch(category) {
          case 'frontend': return 'bg-purple-100 text-purple-700';
          case 'backend': return 'bg-blue-100 text-blue-700';
          case 'database': return 'bg-green-100 text-green-700';
          case 'devops': return 'bg-orange-100 text-orange-700';
          default: return 'bg-gray-100 text-gray-700';
        }
      }
    }
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="bg-white text-black rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-semibold mb-2">
        Extracted Skills ({skills.length})
      </h2>
      <p className="text-xs text-gray-500 mb-4">Found in your resume</p>

      {skills.length === 0 ? (
        <p className="text-gray-500 text-center py-8">Upload a resume to extract skills</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`${getCategoryColor(skill)} px-3 py-1 rounded-full text-sm font-semibold hover:shadow-md transition cursor-default`}
              title={skill}
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}