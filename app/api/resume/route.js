import { extractSkills } from "@/utils/skillExtractor";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("resume");

    // 👇 simple text read (for now mock)
    const text = await file.text();

    const skills = extractSkills(text);

    return Response.json({ success: true, skills });
  } catch (error) {
    return Response.json({ success: false, message: error.message });
  }
}