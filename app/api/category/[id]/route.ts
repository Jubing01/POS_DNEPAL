import { NextRequest, NextResponse } from "next/server";
import { withErrorHandler } from "@/lib/errorHandler";

type Params = { params: Promise<{ id: string }> };

async function PATCHHandler(req: NextRequest, { params }: Params) {
  const body = await req.json();
  const id = (await params).id;
  console.log(body, id);
  return NextResponse.json({
    success: true,
    message: `PATCH product ${id}`,
    body,
  });
}

export const PATCH = withErrorHandler<Params>(PATCHHandler);
