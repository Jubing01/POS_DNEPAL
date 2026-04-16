import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const body = await request.json();
  console.log("body", body);
  return NextResponse.json({
    success: true,
    message: "Checkout Carried Successfully",
  });
}
