import { dbConnect } from "@/lib/dbConnect";
import Company from "@/models/Company";

// Comprehensive skill list for extraction - NO regex escaping needed here
const SKILL_PATTERNS = {
  frontend: ['react', 'vue', 'angular', 'svelte', 'nextjs', 'next.js', 'typescript', 'javascript', 'html', 'css', 'sass', 'tailwind', 'bootstrap', 'figma', 'flutter', 'react native'],
  backend: ['nodejs', 'node.js', 'node', 'express', 'django', 'flask', 'fastapi', 'java', 'spring', 'python', 'php', 'laravel', 'golang', 'go', 'rust', 'cpp', 'c++', 'csharp', 'c#', 'dotnet', '.net'],
  database: ['mongodb', 'mysql', 'postgresql', 'sql', 'firebase', 'redis', 'cassandra', 'elasticsearch', 'graphql'],
  devops: ['docker', 'kubernetes', 'aws', 'azure', 'gcp', 'cicd', 'ci/cd', 'jenkins', 'gitlab', 'github', 'git', 'terraform', 'ansible'],
  other: ['machine learning', 'ml', 'ai', 'deep learning', 'tensorflow', 'pytorch', 'nlp', 'api', 'rest', 'microservices', 'agile', 'scrum']
};

export async function GET() {
  return Response.json({
    success: true,
    message: "Upload Resume API Working",
  });
}

export async function POST(req) {
  try {
    await dbConnect();

    const formData = await req.formData();
    const file = formData.get("resume");

    if (!file) {
      return Response.json(
        { success: false, message: "No file uploaded" },
        { status: 400 }
      );
    }

    // Only PDF allowed
    if (file.type !== "application/pdf") {
      return Response.json(
        { success: false, message: "Only PDF files are allowed" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    let pdfData;
    try {
      const pdfParseModule = await import("pdf-parse");
      const pdfParse = pdfParseModule.default || pdfParseModule;
      pdfData = await pdfParse(buffer);
    } catch (pdfError) {
      console.error("PDF Parsing Error:", pdfError);
      return Response.json(
        { success: false, message: "Failed to parse PDF file. Please ensure it's a valid PDF." },
        { status: 400 }
      );
    }

    if (!pdfData || !pdfData.text) {
      return Response.json(
        { success: false, message: "Could not extract text from PDF" },
        { status: 400 }
      );
    }

    const text = pdfData.text.toLowerCase();

    // Skill extraction - escape special characters for regex
    const allSkillPatterns = Object.values(SKILL_PATTERNS)
      .flat()
      .map(skill => skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); // Escape special regex chars
    
    const regex = new RegExp(`\\b(${allSkillPatterns.join('|')})\\b`, 'gi');
    const extractedSkills = text.match(regex) || [];
    
    const uniqueSkills = [...new Set(extractedSkills.map(s => s.toLowerCase()))];

    // Fetch companies
    let companies;
    try {
      companies = await Company.find();
    } catch (dbError) {
      console.error("Database Error fetching companies:", dbError);
      return Response.json(
        { success: false, message: "Failed to fetch companies from database" },
        { status: 500 }
      );
    }

    // Matching companies with ranking
    const matchedCompaniesWithScore = companies
      .map((company) => {
        const companySkills = company.skillsRequired || [];
        
        // Calculate match score
        const matchedSkills = companySkills.filter((companySkill) =>
          uniqueSkills.some((userSkill) =>
            userSkill.toLowerCase().includes(companySkill.toLowerCase()) ||
            companySkill.toLowerCase().includes(userSkill.toLowerCase())
          )
        );
        
        const matchPercentage = companySkills.length > 0 
          ? Math.round((matchedSkills.length / companySkills.length) * 100)
          : 0;

        return {
          id: company._id,
          name: company.name,
          role: company.category || "IT Services",
          location: company.location || "Not specified",
          description: company.description || "",
          careersLink: company.careersLink,
          matchPercentage,
          matchedSkills,
          companySkillsRequired: companySkills,
        };
      })
      .filter(company => company.matchPercentage > 0) // Only show companies with matches
      .sort((a, b) => b.matchPercentage - a.matchPercentage) // Sort by highest match first
      .slice(0, 10); // Top 10 matches

    return Response.json({
      success: true,
      message: "Resume processed successfully",
      skills: uniqueSkills,
      matchedCompanies: matchedCompaniesWithScore,
      totalMatches: matchedCompaniesWithScore.length,
    });
  } catch (error) {
    console.error("Upload Resume Error:", error);

    return Response.json(
      { 
        success: false, 
        message: error.message || "Internal server error. Please try again later.",
        error: process.env.NODE_ENV === "development" ? error.toString() : undefined
      },
      { status: 500 }
    );
  }
}