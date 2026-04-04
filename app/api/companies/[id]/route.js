import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Company from "@/models/Company";
import mongoose from "mongoose";

export async function GET(req, context) {
  try {
    await dbConnect();

    const { id } = await context.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid company ID" },
        { status: 400 }
      );
    }

    const company = await Company.findById(id);

    if (!company) {
      return NextResponse.json(
        { message: "Company not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(company, { status: 200 });
  } catch (error) {
    console.error("Error fetching company:", error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}