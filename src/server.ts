import fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import { routes } from './routes';

const app = fastify({ logger: true });
dotenv.config();

// Tratamento de erros
app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message });
});

// Configuração de CORS
app.register(cors, {
    origin: process.env.ALLOWED_ORIGIN || 'https://wondrous-semifreddo-cfdac0.netlify.app/nutrition',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
});

// ** Adicione o handler para as requisições preflight (OPTIONS) aqui **
app.options('*', (request, reply) => {
  reply
    .header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    .header('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN)
    .header('Access-Control-Allow-Headers', 'Content-Type')
    .send();
});

// Registro das rotas
app.register(routes);

// Inicialização do servidor
const start = async () => {
    try {
        await app.listen({ port: 3333, host: '0.0.0.0' });
        console.log(`Servidor rodando no http://localhost:3333`);
    } catch (err) {
        console.log(err);
    }
};

start();
