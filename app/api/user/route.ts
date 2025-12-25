//@ts-nocheck

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    console.log(users);
    return NextResponse.json({ success: true, users });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, error });
  }
}
