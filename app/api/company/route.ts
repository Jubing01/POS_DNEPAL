//@ts-nocheck

import { NextRequest, NextResponse } from "next/server";
import Company from "@/models/Company";
import dbConnect from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const reqBody = await request.json();

    const newCompany = new Company(reqBody);
    await newCompany.save();

    return new NextResponse(
      JSON.stringify({ message: "Company received", data: reqBody })
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Error processing package", error: error }),
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const packages = await Company.find({});
    return new NextResponse(
      JSON.stringify({ message: "Company fetched", data: packages })
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error fetching packages", error: error }),
      { status: 500 }
    );
  }
}