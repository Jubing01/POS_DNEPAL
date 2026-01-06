//@ts-nocheck
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, { params }) {
	try {
		const { id } = await params;
		const deletedCategory = await prisma.category.delete({
			where: {
				id: parseInt(id),
			},
		});
		return NextResponse.json({
			message: "Successfully Deleted Category",
			success: true,
		});
	} catch (error) {
		return NextResponse.json(
			{
				message: "Error while Deleting Category",
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
		const patchedCategory = await prisma.category.update({
			where: {
				id: parseInt(id),
			},
			data: {
				category: body.category,
				categorySlug: body.categorySlug,
				status: body.status,
			},
		});
		return NextResponse.json({
			message: "Category Edited Successfully",
		});
	} catch (error) {
		return NextResponse.json(
			{
				message: "Error editing Category",
				error: error,
			},
			{ status: 500 }
		);
	}
}
