import fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import { routes } from './routes';

const app = fastify({ logger: true });
dotenv.config();

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message });
});

app.register(require('@fastify/cors'), {
  origin: process.env.ALLOWED_ORIGIN || '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
});

app.options('*', (request, reply) => {
  reply
    .header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    .header('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN)
    .header('Access-Control-Allow-Headers', 'Content-Type')
    .send();
});

app.register(routes);

const start = async () => {
    try {
        await app.listen({ port: 3333, host: '0.0.0.0' });
        console.log(Servidor rodando no http://localhost:3333);
    } catch (err) {
        console.log(err);
    }
};

start();
