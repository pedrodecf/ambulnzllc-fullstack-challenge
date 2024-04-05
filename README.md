# Backend

## Prerequisites

- [Git](http://git-scm.com/)
- [MySQL](https://www.mysql.com/)

Option one (preferred)

- [Ruby](https://www.ruby-lang.org)
- Ruby framework of your choice (Rails preferred)

Option two

- [nodejs](https://nodejs.org/en/)
- nodejs framework of your choice

- You can use any additional libraries you want.

## Project description

**Pizzeria**

This application serves the purpose of exposing a JSON API to be consumed by a frontend client for ordering pizza.

The following entities should be created (including proper relations):

- _pizza_ - has a name and price (e.g. Margherita $5, Pepperoni $6, ...)
- _order_ - has items
- _order item_ - has a pizza and quantity

The following endpoints should return a JSON response:

- `/api/orders` (list of orders)
- `/api/orders/:id` (details of an individual order)
- `/api/pizzas` (list of pizzas; see './backend/example-pizzas.json')

---

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node%20js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=flat-square&logo=docker&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=flat-square&logo=mysql&logoColor=white)
![Fastify](https://img.shields.io/badge/fastify-202020?style=flat-square&logo=fastify&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=flat-square&logo=Prisma&logoColor=white)

1. Clone this repository to your local machine:

```bash
git clone https://github.com/pedrodecf/ambulnzllc-fullstack-challenge/
```

2. Install the required dependencies:

```bash
npm install
```

3. Start docker compose:

```bash
docker compose up -d
```

4. Run Prisma migrations to create the database tables:

```bash
npx prisma migrate dev
```

5. Run the seeds command to populate the database:

```bash
npm run seed
```

6. Inicie a API:

```bash
npm run dev
```
