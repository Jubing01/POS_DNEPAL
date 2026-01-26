import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { withErrorHandler } from "@/lib/errorHandler";
import { verifyAuth } from "@/lib/auth";

type Params = { params: Promise<{ id: string }> };

export const POST = withErrorHandler<Params>(async function (
	request: NextRequest,
) {
	const body = await request.json();
	await verifyAuth();

	const createdPackage = await prisma.package.create({
		data: {
			name: body.name,
			price: body.price,
			interval: body.interval,
			maxProducts: body.maxProducts,
			maxStaff: body.maxStaff,
			enableReports: body.enableReports,
			enableAdvanced: body.enableAdvanced,
		},
	});

	return NextResponse.json({
		success: true,
		updatedPackages: createdPackage,
	});
});

export const GET = withErrorHandler<Params>(async function () {
	const allPackages = await prisma.package.findMany();

	return NextResponse.json({
		success: true,
		packages: allPackages,
	});
});
