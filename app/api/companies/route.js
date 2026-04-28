import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Company from "@/models/Company";

// GET all companies
export async function GET() {
  try {
    await dbConnect();

    const companies = await Company.find({});
    
    return NextResponse.json({
      success: true,
      message: "Companies fetched successfully",
      data: companies
    });
  } catch (error) {
    console.error("GET Companies Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || "Failed to fetch companies" 
      },
      { status: 500 }
    );
  }
}

// POST new company
export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();

    if (!body.name || !body.careersLink) {
      return NextResponse.json(
        { success: false, message: "Name and careers link are required" },
        { status: 400 }
      );
    }

    const newCompany = await Company.create(body);

    return NextResponse.json({
      success: true,
      message: "Company created successfully",
      data: newCompany
    }, { status: 201 });
  } catch (error) {
    console.error("POST Company Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || "Failed to create company" 
      },
      { status: 500 }
    );
  }
}