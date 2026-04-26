import { dbConnect } from "@/lib/dbConnect";
import Course from "@/models/Course";

export async function GET() {
  try {
    await dbConnect();

    const courses = await Course.find({});
    return Response.json(courses);
  } catch (error) {
    return Response.json(
      { message: "Error", error },
      { status: 500 }
    );
  }
}