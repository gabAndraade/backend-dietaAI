import Fastify from "fastify";
import cors from '@fastify/cors'
import dotenv from 'dotenv'
import { routes } from './routes'

const app = Fastify({ logger: true })
dotenv.config();

const start = async () => {
  // Configuração mais aberta para teste
  app.register(cors, {
    origin: true, // permite qualquer origem
    methods: ['*'], // permite todos os métodos
    allowedHeaders: ['*'], // permite todos os headers
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
