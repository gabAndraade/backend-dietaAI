import fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import { routes } from './routes';

const app = fastify({ logger: true });
dotenv.config();

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message });
});

// Configuração do CORS para permitir a origem do frontend
app.register(cors, {
  origin: process.env.ALLOWED_ORIGIN || 'https://wondrous-semifreddo-cfdac0.netlify.app',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
});

app.register(routes);

const start = async () => {
    try {
        await app.listen({ port: 3333, host: '0.0.0.0' });
        console.log(`Servidor rodando no http://localhost:3333`);
    } catch (err) {
        console.log(err);
    }
};

start();
