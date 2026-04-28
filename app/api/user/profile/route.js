import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";

export async function GET(req) {
  try {
    await dbConnect();

    const token = req.headers.get("authorization")?.split(" ")[1];

    if (!token) {
      return NextResponse.json(
        { success: false, message: "No authentication token provided" },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "User profile fetched successfully",
      data: user
    });
  } catch (error) {
    console.error("User Profile Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || "Failed to fetch user profile" 
      },
      { status: 401 }
    );
  }
}