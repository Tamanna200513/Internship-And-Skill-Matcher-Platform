import CompanyCard from "@/components/Cards/CompanyCard";

export default function MatchedCompanies({ companies }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Top Matched Companies</h2>

      {companies.length === 0 ? (
        <p>No companies matched</p>
      ) : (
        <div className="space-y-3">
          {companies.map((company, index) => (
            <CompanyCard key={index} company={company} />
          ))}
        </div>
      )}
    </div>
  );
}