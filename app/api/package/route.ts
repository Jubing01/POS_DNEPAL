//@ts-nocheck

import { NextRequest, NextResponse } from "next/server";
import Package from "@/models/Package";
import dbConnect from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const reqBody = await request.json();

    const newPackage = new Package(reqBody);
    await newPackage.save();

    return new NextResponse(
      JSON.stringify({ message: "Package received", data: reqBody })
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
    const packages = await Package.find({});
    return new NextResponse(
      JSON.stringify({ message: "Packages fetched", data: packages })
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error fetching packages", error: error }),
      { status: 500 }
    );
  }
}