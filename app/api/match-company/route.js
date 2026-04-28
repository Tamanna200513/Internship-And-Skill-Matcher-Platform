import { dbConnect } from "@/lib/dbConnect";
import Company from "@/models/Company";

export async function GET() {
  try {
    await dbConnect();
    
    return Response.json({
      success: true,
      message: "Matching API is working"
    });
  } catch (error) {
    console.error("Match Company GET Error:", error);
    return Response.json(
      { 
        success: false, 
        message: error.message || "Failed to check matching API" 
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await dbConnect();

    const { skills } = await req.json();

    if (!skills || skills.length === 0) {
      return Response.json({
        success: true,
        message: "No skills provided",
        matched: []
      });
    }

    const companies = await Company.find();

    const matched = companies
      .map((company) => {
        const requiredSkills = company.skillsRequired || [];

        const matchedSkills = requiredSkills.filter((skill) =>
          skills.some(userSkill => 
            userSkill.toLowerCase().includes(skill.toLowerCase()) ||
            skill.toLowerCase().includes(userSkill.toLowerCase())
          )
        );

        const matchScore = requiredSkills.length > 0
          ? Math.round((matchedSkills.length / requiredSkills.length) * 100)
          : 0;

        return {
          _id: company._id,
          name: company.name,
          role: company.category || "IT Services",
          location: company.location,
          matchScore,
          matchedSkills,
        };
      })
      .filter(company => company.matchScore > 0)
      .sort((a, b) => b.matchScore - a.matchScore);

    return Response.json({
      success: true,
      message: "Companies matched successfully",
      matched
    });
  } catch (error) {
    console.error("Match Company POST Error:", error);
    return Response.json(
      { 
        success: false, 
        message: error.message || "Failed to match companies" 
      },
      { status: 500 }
    );
  }
}