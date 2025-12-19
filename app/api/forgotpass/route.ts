//@ts-nocheck
import dbConnect from "@/lib/mongodb";
import ForgotPass from "@/models/ForgotPass";
import { NextResponse } from "next/server";

export async function POST(request) {
    const body =  await request.json()

    await dbConnect()

    const newDataToForpass = ForgotPass.create(body)

    // const newDataToForpass = new ForgotPass(body)
    // await newDataToForpass.save()

    console.log(body)

    return NextResponse.json({
        "status":"success",
        newDataToForpass
    })
    
}