export const runtime = "nodejs";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("resume");

    // ❌ No file check
    if (!file) {
      return Response.json(
        { message: "No file uploaded" },
        { status: 400 }
      );
    }

    // ❌ safe logging
    console.log("FILE:", file.name, file.type);

    // ❌ allow only PDF
    if (file.type !== "application/pdf") {
      return Response.json(
        { message: "Only PDF allowed" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // ✅ safe import (Next.js compatible)
    const pdfParseModule = await import("pdf-parse");
    const pdfParse = pdfParseModule.default || pdfParseModule;

    const data = await pdfParse(buffer);

    console.log("TEXT LENGTH:", data.text?.length);

    // ✅ better safe extraction
    const skills =
      data.text
        ?.toLowerCase()
        .match(/react|node|mongodb|javascript|html|css/g) || [];

    return Response.json({ skills });

  } catch (error) {
    console.error("FULL ERROR:", error);

    return Response.json(
      {
        message: error.message || "Parsing failed",
      },
      { status: 500 }
    );
  }
}