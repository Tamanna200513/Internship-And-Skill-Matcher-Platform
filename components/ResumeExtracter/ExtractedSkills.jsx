export default function ExtractedSkills({ skills = [] }) {
  return (
    <div className="bg-white text-black rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-semibold mb-4">
        Extracted Skills
      </h2>

      {skills.length === 0 ? (
        <p className="text-gray-500">No skills found</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition">
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}