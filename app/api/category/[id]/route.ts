import { NextRequest, NextResponse } from "next/server";
import { withErrorHandler } from "@/lib/errorHandler";
import prisma from "@/lib/prisma";
import slugify from "slugify";

import { Params } from "@/lib/clientSchema/crud/schema";

export const PATCH = withErrorHandler<Params>(async function (
  request: NextRequest,
  { params }: Params
) {
  const body = await request.json();
  const { id } = await params;

  const slug = slugify(body.name, {
    lower: true,
  });
  const updatedCategory = await prisma.category.update({
    where: {
      id: id,
    },
    data: {
      name: body.name,
      createdBy: body.createdBy,
      slug,
    },
  });

  return NextResponse.json({
    success: true,
    message: `PATCH product ${id}`,
    updatedCategory,
  });
});

export const DELETE = withErrorHandler<Params>(async function (
  request: NextRequest,
  { params }: Params
) {
  const { id } = await params;
  const deletedCategory = await prisma.category.delete({ where: { id } });
  return NextResponse.json({
    success: true,
    deletedCategory,
  });
});
