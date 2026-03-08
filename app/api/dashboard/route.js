import connectDB from "@/lib/dbConnect";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    // Example: First user fetch kar rahe
    const user = await User.findOne();

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  } 
}    