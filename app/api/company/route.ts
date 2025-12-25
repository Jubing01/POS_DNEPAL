//@ts-nocheck

import { NextRequest, NextResponse } from "next/server";
import Company from "@/models/Company";
import dbConnect from "@/lib/mongodb";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const passwordHash = await bcrypt.hash(reqBody.password, 10);

    const newCompany = await prisma.company.create({
      data: {
        name: reqBody.name,
        address: reqBody.address,
        phone: reqBody.phone,
        pan: reqBody.pan,
        users: {
          create: {
            name: reqBody.name,
            email: reqBody.email,
            password: passwordHash,
            role: "admin",
          },
        },
      },
    });

    return new NextResponse(
      JSON.stringify({
        message: "Company created successfully",
        data: newCompany,
      })
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
    const companies = await prisma.company.findMany({
      select: {
        id: true,
        name: true,
        address: true,
        phone: true,
        pan: true,
        users: {
          select: {
            name: true,
            email: true,
            role: true,
          },
        },
      },
    });
    return new NextResponse(
      JSON.stringify({ message: "Company fetched", companies })
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error fetching packages", error: error }),
      { status: 500 }
    );
  }
}
