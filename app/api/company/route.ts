import { verifyAuth } from "@/lib/auth";
import { Params } from "@/lib/clientSchema/crud/schema";
import { withErrorHandler } from "@/lib/errorHandler";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const GET = withErrorHandler<Params>(async function (
  request: NextRequest,
  { params }: Params
) {
  const companies = await prisma.company.findMany({
    select: {
      name: true,
      address: true,
      phone: true,
      pan: true,
      logoUrl: true,
      currency: true,
      rounding: true,
      subscriptions: {
        select: {
          package: {
            select: {
              id: true,
              name: true,
              interval: true,
            },
          },
          startDate: true,
          endDate: true,
        },
        take: 1,
        orderBy: { startDate: "desc" },
      },
      users: {
        where: {
          role: "COMPANY_ADMIN",
        },
        take: 1,
        select: {
          name: true,
          email: true,
          password: true,
        },
      },
    },
  });
  const formatted = companies.map((company) => {
    const adminUser = company.users[0];
    const subscription = company.subscriptions[0];

    return {
      company: {
        name: company.name,
        address: company.address,
        phone: company.phone,
        pan: company.pan,
        logoUrl: company.logoUrl,
        currency: company.currency,
        rounding: company.rounding,
      },
      adminUser: adminUser
        ? {
            name: adminUser.name,
            email: adminUser.email,
            password: "", // never send password back
          }
        : null,
      subscription: subscription
        ? {
            packageId: subscription.package.id,
            packageName: subscription.package.name,
            packageInterval: subscription.package.interval,
            startDate: subscription.startDate,
            endDate: subscription.endDate,
          }
        : null,
    };
  });
  return NextResponse.json({
    success: true,
    companies: formatted,
  });
});

export const POST = withErrorHandler<Params>(async function (
  request: NextRequest,
  { params }: Params
) {
  const body = await request.json();

  const userDetails = await verifyAuth();

  const hashedPassword = await bcrypt.hash(body.adminUser.password, 10);
  const getPackage = await prisma.package.findUnique({
    where: {
      id: body.subscription.packageId,
    },
  });
  const result = await prisma.$transaction(async (tx) => {
    const pkg = await tx.package.findUnique({
      where: { id: body.subscription.packageId },
    });

    if (!pkg) {
      throw new Error("Package not found");
    }

    const endDate = new Date();

    if (pkg.interval === "MONTHLY") {
      endDate.setMonth(endDate.getMonth() + 1);
    }
    if (pkg.interval === "YEARLY") {
      endDate.setMonth(endDate.getFullYear() + 1);
    }
    const company = await tx.company.create({
      data: {
        name: body.company.name,
        address: body.company.address,
        phone: body.company.phone,
        pan: body.company.pan,
        currency: body.company.currency,
        rounding: body.company.rounding,
        logoUrl: body.company.logoUrl,
      },
    });
    const adminUser = await tx.user.create({
      data: {
        name: body.adminUser.name,
        email: body.adminUser.email,
        password: hashedPassword,
        role: "COMPANY_ADMIN",
      },
    });

    const subscription = await tx.subscription.create({
      data: {
        companyId: company.id,
        packageId: body.subscription.packageId,
        startDate: new Date(),
        endDate,
      },
    });

    await tx.auditLog.create({
      data: {
        action: "CREATE",
        entity: "COMPANY",
        entityId: company.id,
        userId: userDetails.id,
        companyId: company.id,
        description: `Company created with new subscription`,
      },
    });

    return { company, adminUser, subscription };
  });
  return NextResponse.json({
    success: true,
  });
});
