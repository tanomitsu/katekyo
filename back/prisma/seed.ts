import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  await prisma.user.deleteMany({})
  const users = await prisma.user.upsert({
    where: {
      id: 'c7fa589e-a2a4-400f-8825-79a6c5d4a100',
    },
    update: {},
    create: {
      id: 'c7fa589e-a2a4-400f-8825-79a6c5d4a100',
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
