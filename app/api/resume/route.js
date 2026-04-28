import { extractSkills } from "@/utils/skillExtractor";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("resume");

    if (!file) {
      return Response.json(
        { success: false, message: "No file uploaded" },
        { status: 400 }
      );
    }

    const text = await file.text();
    const skills = extractSkills(text);

    return Response.json({ 
      success: true, 
      message: "Skills extracted successfully",
      skills 
    });
  } catch (error) {
    console.error("Resume Extract Error:", error);
    return Response.json(
      { 
        success: false, 
        message: error.message || "Failed to extract skills" 
      },
      { status: 500 }
    );
  }
}