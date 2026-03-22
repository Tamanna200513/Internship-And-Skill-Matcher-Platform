export default function CompanyCard({ company }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold">{company.name}</h2>
      <p>{company.description}</p>

      <p className="text-sm mt-2">
        Skills: {company.skillsRequired.join(", ")}
      </p>

      <button
        onClick={() => window.open(company.careersLink, "_blank")}
        className="mt-3 bg-green-500 text-white px-3 py-1 rounded"
      >
        Apply Now
      </button>
    </div>
  );
}