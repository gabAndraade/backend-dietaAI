import Fastify from "fastify";
import cors from '@fastify/cors'
import dotenv from 'dotenv'
import { routes } from './routes'

const app = Fastify({ logger: true })
dotenv.config();

// ❌ Removido o setErrorHandler que devolvia sempre 400

const start = async () => {
  app.register(cors, {
    origin: 'https://wondrous-semifreddo-cfdac0.netlify.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['*'], // mais seguro para testes
  });

  app.register(routes);

  try {
    await app.listen({ port: 3333, host: "0.0.0.0" })
    console.log(`Servidor rodando no http://localhost:3333`)
  } catch (err) {
    console.log(err);
  }
}

start();
