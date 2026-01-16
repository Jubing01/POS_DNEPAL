import prisma from "@/lib/prisma"

async function main() {
  // 1. Create default super admin user
  const superAdmin = await prisma.user.create({
    data: {
      email: 'admin@company.com',
      password: 'hashed_password_here', // hash this properly
      name: 'Super Admin',
      role: 'SUPER_ADMIN',
    },
  })

  // 2. Create a default package
  const defaultPackage = await prisma.package.create({
    data: {
      name: 'Basic Plan',
      price: 1000,
      interval: 'MONTHLY',
      maxProducts: 50,
      maxStaff: 5,
      maxWarehouses: 1,
      maxStockAdjust: 10,
      enableReports: true,
      enableAdvanced: false,
    },
  })

  console.log('Seed data created!')
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })