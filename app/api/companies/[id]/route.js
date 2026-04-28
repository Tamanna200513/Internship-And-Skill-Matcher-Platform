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
        { success: false, message: "Invalid company ID" },
        { status: 400 }
      );
    }

    const company = await Company.findById(id);

    if (!company) {
      return NextResponse.json(
        { success: false, message: "Company not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Company fetched successfully",
      data: company
    }, { status: 200 });
  } catch (error) {
    console.error("Error fetching company:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || "Failed to fetch company" 
      },
      { status: 500 }
    );
  }
}