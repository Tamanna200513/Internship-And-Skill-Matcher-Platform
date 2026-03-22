import dbConnect from "@/lib/dbConnect";
import Company from "@/models/Company";

export async function GET() {
  await dbConnect();

  try {
    const companies = await Company.find();
    return Response.json({ success: true, companies });
  } catch (error) {
    return Response.json({ success: false, message: error.message });
  }
}
