import { prisma } from '../lib/prisma'
import { seedOrders } from './orders'
import { seedPizzas } from './pizzas'

async function seed() {
  try {
    await seedPizzas()
    await seedOrders()
    console.log('Seeding completed successfully')
  } catch (err) {
    console.error('Error when seeding:', err)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
    process.exit(0)
  }
}

seed()
