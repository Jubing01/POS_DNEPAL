//@ts-nocheck

import { NextRequest, NextResponse } from "next/server";
import Company from "@/models/Company";
import dbConnect from "@/lib/mongodb";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const newCompany = await prisma.company.create({
      data: {
        name: reqBody.name,
        address: reqBody.address,
        email: reqBody.email,
        phone: reqBody.phone,
        pan: reqBody.pan,
        password: reqBody.password,
      },
    });

    return new NextResponse(
      JSON.stringify({ message: "Company created", data: newCompany })
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
    const companies = await prisma.company.findMany();

    return new NextResponse(
      JSON.stringify({ message: "Company fetched", data: companies })
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error fetching packages", error: error }),
      { status: 500 }
    );
  }
}
