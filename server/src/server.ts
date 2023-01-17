import Fastify from "fastify";
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors)

app.get('/hello', async () => {
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: 'beber',
      }
    }
  });

  return habits;
})

app.get('/', () => {
  return { hello: 'world' };
});

app.listen({
  port: 3000,
}).then(() => {
  console.log('Server running');
});