//@ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
	try {
		const reqBody = await request.json();

		const newCategory = await prisma.category.create({
			data: {
				category: reqBody.category,
				categorySlug: reqBody.categorySlug,
				status: reqBody.status,
			},
		});

		return NextResponse.json(
			{
				message: "Category created successfully",
				data: newCategory,
			},
			{ status: 201 }
		);
	} catch (error) {
		console.error("Category creation error:", error);
		return NextResponse.json(
			{ message: "Error creating category", error: error.message },
			{ status: 500 }
		);
	}
}

export async function GET() {
	try {
		const categories = await prisma.category.findMany();

		return NextResponse.json({
			message: "Categories fetched",
			data: categories,
		});
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: "Error fetching categories", error: error },
			{ status: 500 }
		);
	}
}
