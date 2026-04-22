import { NextResponse } from "next/server";
import fs from "fs";

const skillsList = ["javascript", "react", "node", "mongodb"];

export async function POST(req) {
  try {
    const { filePath } = await req.json();

    const fullPath = `public${filePath}`;
    console.log("Reading:", fullPath);

    const dataBuffer = fs.readFileSync(fullPath);

    // 🔥 IMPORTANT FIX (dynamic import)
    const pdfParse = (await import("pdf-parse")).default;

    const data = await pdfParse(dataBuffer);

    const text = data.text.toLowerCase();

    const skills = skillsList.filter(skill =>
      text.includes(skill)
    );

    return NextResponse.json({
      success: true,
      skills,
    });

  } catch (error) {
    console.error("EXTRACT ERROR:", error);

    return NextResponse.json(
      { error: "Extraction failed" },
      { status: 500 }
    );
  }
}