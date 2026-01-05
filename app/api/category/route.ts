//@ts-nocheck
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	try {
        //you can write logic for if company = this , then only fetch it's category
		const categories = await prisma.company.findMany({
			select: {
				categories: {
					select: {
						name: true,
                        createdAt: true,
					},
				},
			},
		});
		return NextResponse.json({
			success: true,
			categories,
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			success: false,
			error: error,
		});
	}
}
export async function POST(request) {
	try {
		const body = await request.json();
		const newCategory = await prisma.company.update({
			where: {
				id: parseInt(body.company),
			},
			data: {
				categories: {
					connectOrCreate: {
						where: {
							name: body.name,
						},
						create: {
							name: body.name,
						},
					},
				},
			},
		});
		console.log(newCategory);

		return NextResponse.json({
			success: true,
			newCategory,
		});
	} catch (error) {
		console.log(error);

		return NextResponse.json({
			success: false,
		});
	}
}
