import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UsersCreateInput[] = [
  {
    email: 'lauro.neto.1995@gmail.com',
    password: '$2b$10$jBVNtDk62JLqImz3DHauOeMQua4XTF/n4j1rih1ngYB5MAARIXCia'
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.users.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })