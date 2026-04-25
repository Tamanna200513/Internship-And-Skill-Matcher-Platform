export default function ExtractedSkills({ skills }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Extracted Skills</h2>

      {skills.length === 0 ? (
        <p>No skills found</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-green-200 px-3 py-1 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}