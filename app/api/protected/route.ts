import { verifyAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const userInfo = await verifyAuth();
        return NextResponse.json({message: "Successful Access", userInfo})
    }
    catch(error) {
        return NextResponse.json({message: "Failure", error})
    }
}