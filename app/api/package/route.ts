import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // your singleton Prisma client

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const newPackage = await prisma.package.create({
      data: {
        name: reqBody.name,
        type: reqBody.type,
        maxCustomer: parseInt(reqBody.maxCustomer),
        maxProduct: parseInt(reqBody.maxProduct),
        price: parseFloat(reqBody.price),
      },
    });

    return NextResponse.json({
      message: "Package created",
      data: newPackage,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error creating package", error: error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const packages = await prisma.package.findMany();

    return NextResponse.json({
      message: "Packages fetched",
      data: packages,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error fetching packages", error: error },
      { status: 500 }
    );
  }
}
