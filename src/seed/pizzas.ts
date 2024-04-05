import { prisma } from '../lib/prisma'

export async function seedPizzas() {
  try {
    await prisma.pizza.createMany({
      data: [
        {
          name: 'Margherita',
          price: 5,
          ingredients: 'tomato, mozzarella',
        },
        {
          name: 'Bufala',
          price: 6,
          ingredients: 'tomato, mozarella di bufala',
        },
        {
          name: 'Romana',
          price: 5,
          ingredients: 'tomato, mozzarella, anchovies, oregano, oil',
        },
        {
          name: 'Diavola',
          price: 7.5,
          ingredients: 'tomato, mozzarella, spicy salami',
        },
        {
          name: 'Pizza Bianca',
          price: 5,
          ingredients: 'mozzarella, oregano',
        },
      ],
    })
    console.log('Pizzas seeded successfully')
  } catch (err) {
    console.error('Error seeding pizzas:', err)
  } finally {
    await prisma.$disconnect()
  }
}
