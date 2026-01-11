import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const allCategories = [
      { id: "1", name: "Mobile" },
      { id: "2", name: "Laptop" },
      { id: "3", name: "Desktop" },
    ];
    return NextResponse.json({
      success: true,
      categories: allCategories,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        error,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
  } catch (error) {
    console.log(error);
  }
}
