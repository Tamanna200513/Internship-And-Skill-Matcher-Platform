import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { data } from "framer-motion/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {

    const { email, password } = await req.json();

    await dbConnect();

    // check required fields
    if (!email || !password) {
      return NextResponse.json(
        { message: "All fields required" },
        { status: 400 }
      );
    }

    // find user
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }
const data = await res.json();
console.log("LOGIN DATA:", data);  // 👈 ADD THIS
    // login success
    return NextResponse.json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {

    console.error("LOGIN ERROR 👉", error);
    localStorage.setItem("token",data.token);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}