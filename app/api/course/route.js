import { dbConnect } from "@/lib/dbConnect";
import Course from "@/models/Course";

export async function GET() {
  try {
    await dbConnect();

    const courses = await Course.find({});
    
    return Response.json({
      success: true,
      message: "Courses fetched successfully",
      data: courses
    });
  } catch (error) {
    console.error("GET Courses Error:", error);
    return Response.json(
      { 
        success: false, 
        message: error.message || "Failed to fetch courses" 
      },
      { status: 500 }
    );
  }
}