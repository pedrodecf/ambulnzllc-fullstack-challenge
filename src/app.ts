import fastify from 'fastify'
import { prisma } from './lib/prisma'
import { z } from 'zod'

export const app = fastify()

app.get('/api/orders', async (_, reply) => {
  const orders = await prisma.order.findMany({
    include: {
      orderItems: {
        include: {
          pizza: {
            select: { id: true, name: true, price: true, ingredients: true },
          },
        },
      },
    },
  })

  const formattedOrders = orders.map((order) => ({
    id: order.id,
    orderItems: order.orderItems.map((orderItem) => ({
      pizza: {
        id: orderItem.pizza.id,
        name: orderItem.pizza.name,
        price: orderItem.pizza.price,
        ingredients: orderItem.pizza.ingredients.split(', '),
      },
      quantity: orderItem.quantity,
    })),
  }))

  return reply.send(formattedOrders)
})

app.get('/api/orders/:id', async (request, reply) => {
  const orderIdParamsSchema = z.object({
    id: z.coerce.number(),
  })

  const { id } = orderIdParamsSchema.parse(request.params)

  const order = await prisma.order.findFirstOrThrow({
    where: { id },
    include: {
      orderItems: {
        include: {
          pizza: {
            select: { id: true, name: true, price: true, ingredients: true },
          },
        },
      },
    },
  })

  const formattedOrder = {
    id: order.id,
    orderItems: order.orderItems.map((orderItem) => ({
      pizza: {
        id: orderItem.pizza.id,
        name: orderItem.pizza.name,
        price: orderItem.pizza.price,
        ingredients: orderItem.pizza.ingredients.split(', '),
      },
      quantity: orderItem.quantity,
    })),
  }

  return reply.send(formattedOrder)
})

app.get('/api/pizzas', async (_, reply) => {
  const pizzas = await prisma.pizza.findMany()

  const pizzasWithIngredients = pizzas.map((pizza) => ({
    name: pizza.name,
    price: pizza.price,
    ingredients: pizza.ingredients.split(', '),
  }))

  return reply.send(pizzasWithIngredients)
})
