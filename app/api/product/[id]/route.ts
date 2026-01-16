import { withErrorHandler } from "@/lib/errorHandler";

import { Params } from "@/lib/clientSchema/crud/schema";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = withErrorHandler<Params>(async function (
  request: NextRequest,
  { params }
) {
  return NextResponse.json({
    success: true,
  });
});

export const DELETE = withErrorHandler<Params>(async function (
  request: NextRequest,
  { params }
) {
  return NextResponse.json({
    success: true,
  });
});
