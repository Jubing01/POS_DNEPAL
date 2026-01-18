import { withErrorHandler } from "@/lib/errorHandler";

import { Params } from "@/lib/clientSchema/crud/schema";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyAuth } from "@/lib/auth";

export const GET = withErrorHandler<Params>(async function (
  request: NextRequest,
  { params }
) {
  const returnedProducts = await prisma.product.findMany();
  return NextResponse.json({
    success: true,
    products: returnedProducts,
  });
});

export const POST = withErrorHandler<Params>(async function (
  request: NextRequest,
  { params }
) {
  const body = await request.json();
  console.log(body);
  const userDetail = await verifyAuth();
  if (!userDetail.companyId) {
    return NextResponse.json(
      {
        success: false,
        message: "User without Company cannot create Product",
      },
      { status: 403 }
    );
  }
  const addedProduct = await prisma.product.create({
    data: {
      name: body.name,
      sku: body.sku,
      costPrice: body.costPrice,
      sellingPrice: body.sellingPrice,
      unit: body.unit,
      minStock: body.minStock,
      openingStock: body.openingStock,
      expiryDate: body.expiryDate,
      status: body.status,
      company: {
        connect: {
          id: userDetail.companyId,
        },
      },
      category: {
        connect: {
          id: body.categoryId,
        },
      },
      brand: {
        connect: {
          id: body.brandId,
        },
      },
    },
  });
  return NextResponse.json({
    success: true,
    addedProduct,
    message: "Product Created Successfully",
  });
});
