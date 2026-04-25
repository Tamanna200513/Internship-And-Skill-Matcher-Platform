import { dbConnect } from "@/lib/dbConnect";
import Company from "@/models/Company";

export async function POST(req) {
  try {
    console.log("DB CONNECT FUNCTION:", dbConnect);
    await dbConnect();

    const { skills } = await req.json();

    if (!skills || skills.length === 0) {
      return Response.json({ matched: [] });
    }

    // ✅ DB se companies fetch karo
    const companies = await Company.find();

    // ✅ Matching logic
    const matched = companies.map((company) => {
      const requiredSkills = company.skillsRequired || [];

      const matchedSkills = requiredSkills.filter((skill) =>
        skills.includes(skill.toLowerCase())
      );

      const matchScore = Math.round(
        (matchedSkills.length / requiredSkills.length) * 100
      );

      return {
        _id: company._id,
        name: company.name,
        role: company.role,
        careersLink: company.careersLink,
        matchedSkills,
        matchScore,
      };
    })
    .filter((c) => c.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore);

    return Response.json({ matched });

  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "Matching failed" },
      { status: 500 }
    );
  }
}