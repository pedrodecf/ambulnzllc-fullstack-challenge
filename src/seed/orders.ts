import { prisma } from '../lib/prisma'

export async function seedOrders() {
  try {
    for (let i = 1; i < 6; i++) {
      const order = await prisma.order.create({})
      await prisma.orderItem.create({
        data: {
          quantity: 1,
          pizzaId: i,
          orderId: order.id,
        },
      })
    }

    console.log('Orders seeded successfully')
  } catch (err) {
    console.error('Error seeding orders:', err)
  } finally {
    await prisma.$disconnect()
  }
}
