import { PrismaClient, UserRole } from "@/app/generated/prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const existing = await prisma.user.findFirst({
    where: { role: UserRole.SUPER_ADMIN },
  });

  if (existing) return;

  await prisma.user.create({
    data: {
      email: "superadmin@gmail.com",
      password: await bcrypt.hash("Superadmin", 10),
      role: UserRole.SUPER_ADMIN,
      isActive: true,
    },
  });

  console.log("✅ Super admin seeded");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
