import { withErrorHandler } from "@/lib/errorHandler";

import { Params } from "@/lib/clientSchema/crud/schema";
import { NextRequest, NextResponse } from "next/server";

export const GET = withErrorHandler<Params>(async function (
  request: NextRequest,
  { params }
) {
  return NextResponse.json({
    success: true,
    products: [],
  });
});

export const POST = withErrorHandler<Params>(async function (
  request: NextRequest,
  { params }
) {
  const body = await request.json();
  console.log(body);
  return NextResponse.json({
    success: true,
  });
});
