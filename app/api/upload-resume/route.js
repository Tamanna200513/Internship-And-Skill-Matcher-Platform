export const runtime = "nodejs";

import { dbConnect } from "@/lib/dbConnect";
import Company from "@/models/Company";

export async function POST(req) {
  try {
    await dbConnect();

    const formData = await req.formData();
    const file = formData.get("resume");

    if (!file) {
      return Response.json(
        { message: "No file uploaded" },
        { status: 400 }
      );
    }

    // ✅ only PDF allowed
    if (file.type !== "application/pdf") {
      return Response.json(
        { message: "Only PDF allowed" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const pdfParseModule = await import("pdf-parse");
    const pdfParse = pdfParseModule.default || pdfParseModule;

    const data = await pdfParse(buffer);
    const text = data.text.toLowerCase();

    // ✅ SKILL EXTRACTION
    const skills =
      text.match(
        /react|node\.js|node|mongodb|javascript|html|css|java|python|c\+\+|sql|next\.js/g
      ) || [];

    const uniqueSkills = [...new Set(skills)];

    // ✅ FETCH COMPANIES FROM DB
    const companies = await Company.find();

    console.log("User Skills:", uniqueSkills);
    console.log("DB Companies:", companies.length);

    // ✅ MATCHING LOGIC (SMART)
    const matchedCompanies = companies.filter((company) =>
      company.skills.some((companySkill) =>
        uniqueSkills.some((userSkill) =>
          userSkill.toLowerCase().includes(companySkill.toLowerCase())
        )
      )
    );

    return Response.json({
      success: true,
      skills: uniqueSkills,
      matchedCompanies,
    });
  } catch (error) {
    console.error("ERROR:", error);

    return Response.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}