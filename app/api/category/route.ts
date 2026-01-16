import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { withErrorHandler } from "@/lib/errorHandler";
import { verifyAuth } from "@/lib/auth";
import slugify from "slugify";

import { Params } from "@/lib/clientSchema/crud/schema";

export const POST = withErrorHandler<Params>(async function (
  request: NextRequest,
  { params }: Params
) {
  const body = await request.json();

  const slug = slugify(body.name, {
    lower: true,
  });

  const user = await verifyAuth();

  const createdUser = user.role;

  const createdCategory = await prisma.category.create({
    data: {
      name: body.name,
      createdBy: createdUser,
      slug: slug,
    },
  });

  return NextResponse.json({
    success: true,
    updatedCategories: createdCategory,
  });
});

export const GET = withErrorHandler<Params>(async function (
  request: NextRequest,
  { params }: Params
) {
  const allCategories = await prisma.category.findMany();

  return NextResponse.json({
    success: true,
    categories: allCategories,
  });
});
