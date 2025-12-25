//@ts-nocheck
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, { params }) {
  try {
    const { id } = await params;
    const deletedPackage = await prisma.package.delete({
      where: {
        id: parseInt(id),
      },
    });
    return NextResponse.json({
      message: "Successfully Deleted Package",
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error while Deleting Package",
        error: error,
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const patchedPackage = await prisma.package.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: body.name,
        type: body.type,
        maxCustomer: parseInt(body.maxCustomer),
        maxProduct: parseInt(body.maxProduct),
        price: parseFloat(body.price),
      },
    });
    return NextResponse.json({
      message: "Package Edited Successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error editing Package",
        error: error,
      },
      { status: 500 }
    );
  }
}
