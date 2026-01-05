//@ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
	try {
		const reqBody = await request.json();

		const newProduct = await prisma.product.create({
			data: {
				sku: reqBody.sku,
				productName: reqBody.productName,
				category: reqBody.category,
				brand: reqBody.brand,
				price: parseFloat(reqBody.price),
				unit: reqBody.unit,
				quantity: parseInt(reqBody.quantity),
				// companyId: parseInt(reqBody.companyId),
				// createdBy: reqBody.createdBy,
			},
		});

		return NextResponse.json(
			{
				message: "Product created successfully",
				data: newProduct,
			},
			{ status: 201 }
		);
	} catch (error) {
		console.error("Product creation error:", error);
		return NextResponse.json(
			{ message: "Error creating product", error: error.message },
			{ status: 500 }
		);
	}
}

export async function GET() {
	try {
		const products = await prisma.product.findMany();

		return NextResponse.json({
			message: "Products fetched",
			data: products,
		});
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: "Error fetching products", error: error },
			{ status: 500 }
		);
	}
}
