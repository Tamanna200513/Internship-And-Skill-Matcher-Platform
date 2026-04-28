export default function MatchedCompanies({ companies = [] }) {
  const getMatchColor = (percentage) => {
    if (percentage >= 80) return "bg-green-100 text-green-700";
    if (percentage >= 60) return "bg-blue-100 text-blue-700";
    if (percentage >= 40) return "bg-yellow-100 text-yellow-700";
    return "bg-orange-100 text-orange-700";
  };

  const getMatchBgColor = (percentage) => {
    if (percentage >= 80) return "bg-green-500";
    if (percentage >= 60) return "bg-blue-500";
    if (percentage >= 40) return "bg-yellow-500";
    return "bg-orange-500";
  };

  return (
    <div className="bg-white text-black rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-semibold mb-4">
        Top Matched Companies ({companies.length})
      </h2>

      {companies.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          Upload a resume to see matched companies
        </p>
      ) : (
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {companies.map((company, index) => (
            <div
              key={company.id || index}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{company.name}</h3>
                  <p className="text-xs text-gray-500">{company.role}</p>
                  <p className="text-xs text-gray-400">{company.location}</p>
                </div>
                <span className={`${getMatchColor(company.matchPercentage)} px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ml-2`}>
                  {company.matchPercentage}%
                </span>
              </div>

              {/* Match Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className={`${getMatchBgColor(company.matchPercentage)} h-2 rounded-full transition-all`}
                  style={{ width: `${company.matchPercentage}%` }}
                />
              </div>

              {/* Matched Skills */}
              {company.matchedSkills && company.matchedSkills.length > 0 && (
                <div className="mb-2">
                  <p className="text-xs font-semibold text-gray-600 mb-1">
                    Matched Skills: {company.matchedSkills.length}/{company.companySkillsRequired.length}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {company.matchedSkills.map((skill, idx) => (
                      <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Missing Skills */}
              {company.companySkillsRequired && company.companySkillsRequired.length > 0 && (
                <div className="mb-2">
                  <p className="text-xs font-semibold text-gray-600 mb-1">
                    Skills to Learn:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {company.companySkillsRequired
                      .filter(skill => !company.matchedSkills.includes(skill))
                      .slice(0, 3)
                      .map((skill, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    {company.companySkillsRequired.filter(skill => !company.matchedSkills.includes(skill)).length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{company.companySkillsRequired.filter(skill => !company.matchedSkills.includes(skill)).length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Careers Link */}
              {company.careersLink && (
                <a
                  href={company.careersLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm hover:underline"
                >
                  View Openings →
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}