import Fastify from "fastify";
import cors from '@fastify/cors'
import dotenv from 'dotenv'
import { routes } from './routes'

const app = Fastify({ logger: true })
dotenv.config();

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message })
})

const start = async () => {
  app.register(cors, {
    origin: 'https://main--wondrous-semifreddo-cfdac0.netlify.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
  });
  app.register(routes)


  try{
    await app.listen({ port: 3333, host: "0.0.0.0"})
    console.log(`Servidor rodando no http://localhost:3333`)
  }catch(err){
    console.log(err);
  }

}

start();