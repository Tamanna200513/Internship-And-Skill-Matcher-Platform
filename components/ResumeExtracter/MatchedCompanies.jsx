export default function TopMatchedCompanies({ companies = [] }) {
  return (
    <div className="bg-white text-black rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-semibold mb-4">
        Top Matched Companies
      </h2>

      {companies.length === 0 ? (
        <p className="text-gray-500">No companies matched</p>
      ) : (
        companies.map((company, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 mb-3 border rounded-lg hover:shadow-sm transition"
          >
            <div>
              <p className="font-medium">{company.name}</p>
              <p className="text-xs text-gray-500">
                {company.role || "IT Services"}
              </p>
            </div>

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              {company.match} Match
            </span>
          </div>
        ))
      )}
    </div>
  );
}