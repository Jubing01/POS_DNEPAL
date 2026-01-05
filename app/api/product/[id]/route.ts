//@ts-nocheck
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, { params }) {
	try {
		const { id } = await params;
		const deletedProduct = await prisma.product.delete({
			where: {
				id: parseInt(id),
			},
		});
		return NextResponse.json({
			message: "Successfully Deleted Product",
			success: true,
		});
	} catch (error) {
		return NextResponse.json(
			{
				message: "Error while Deleting Product",
				error: error,
			},
			{ status: 500 }
		);
	}
}

export async function PATCH(request: NextRequest, { params }) {
	try {
		const { id } = await params;
		const body = await request.json();
		const patchedProduct = await prisma.product.update({
			where: {
				id: parseInt(id),
			},
			data: {
				sku: body.sku,
				productName: body.productName,
				category: body.category,
				brand: body.brand,
				price: parseFloat(body.price),
				unit: body.unit,
				quantity: parseInt(body.quantity),
				companyId: parseInt(body.companyId),
				createdBy: body.createdBy,
			},
		});
		return NextResponse.json({
			message: "Product Edited Successfully",
		});
	} catch (error) {
		return NextResponse.json(
			{
				message: "Error editing Product",
				error: error,
			},
			{ status: 500 }
		);
	}
}
