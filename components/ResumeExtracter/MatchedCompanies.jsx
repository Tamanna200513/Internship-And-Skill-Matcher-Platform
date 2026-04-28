export default function MatchedCompanies({ companies = [] }) {
  const getMatchColor = (p) => {
    if (p >= 80) return "bg-green-500";
    if (p >= 60) return "bg-blue-500";
    if (p >= 40) return "bg-yellow-500";
    return "bg-orange-500";
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-center mt-20">
        Top Matched Companies ({companies.length})
      </h2>

      {companies.length === 0 ? (
        <p className="text-center py-10 text-gray-300">
          Upload a resume to see matched companies
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6  backdrop-blur-lg rounded-2xl p-6 shadow-xl">
          {companies.map((company, index) => (
            <div
              key={company.id || index}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              {/* TOP */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">
                  {company.name}
                </h3>

                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                  {company.matchPercentage}%
                </span>
              </div>

              <p className="text-xs text-white">{company.role}</p>
              <p className="text-xs text-white mb-4">{company.location}</p>

              {/* PROGRESS */}
              <div className="w-full bg-white/20 h-2 rounded-full mb-4">
                <div
                  className={`${getMatchColor(company.matchPercentage)} h-2 rounded-full transition-all`}
                  style={{ width: `${company.matchPercentage}%` }}
                />
              </div>

              {/* MATCHED */}
              {company.matchedSkills?.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-300 mb-1">
                    Matched Skills
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {company.matchedSkills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* MISSING */}
              {company.companySkillsRequired?.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-300 mb-1">
                    Skills to Learn
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {company.companySkillsRequired
                      .filter(skill => !company.matchedSkills.includes(skill))
                      .slice(0, 3)
                      .map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                  </div>
                </div>
              )}

              {/* BUTTON */}
              {company.careersLink && (
                <a
                  href={company.careersLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-3 text-white hover:bg-blue-700  py-2 rounded-lg text-sm font-medium transition !no-underline"
                >
                  View Openings →
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}