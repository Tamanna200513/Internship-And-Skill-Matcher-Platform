import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Company from "@/models/Company";

// GET all companies
export async function GET() {
  try {
    await dbConnect();

    const companies = await Company.find({});
    return NextResponse.json(companies);
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch companies" },
      { status: 500 }
    );
  }
}

// POST new company
export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();

    const newCompany = await Company.create(body);

    return NextResponse.json(newCompany, { status: 201 });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json(
      { error: "Failed to create company" },
      { status: 500 }
    );
  }
}