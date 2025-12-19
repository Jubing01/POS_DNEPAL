//@ts-nocheck
import dbConnect from "@/lib/mongodb";
import Login from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
	const body = await request.json();

	await dbConnect();

	const newLogin = await Login.create(body);

	console.log("Login data:", body);

	return NextResponse.json({
		status: "success",
		data: newLogin,
	});
}
