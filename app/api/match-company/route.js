import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Company from "@/models/Company";

export async function POST(req) {
  await dbConnect();

  const { skills } = await req.json();

  const userSkills = skills.map(s => s.toLowerCase());

  const companies = await Company.find();

  const matched = companies
    .map(company => {
      const required = company.skillsRequired.map(s =>
        s.toLowerCase()
      );

      if (required.length === 0) return null;

      const matchedSkills = required.filter(skill =>
        userSkills.includes(skill)
      );

      const matchScore =
        (matchedSkills.length / required.length) * 100;

      return {
        ...company._doc,
        matchScore: Math.round(matchScore),
        matchedSkills,
      };
    })
    .filter(Boolean)
    .filter(c => c.matchScore >= 30)
    .sort((a, b) => b.matchScore - a.matchScore);

  return NextResponse.json({ matched });
}