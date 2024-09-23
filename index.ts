import fastify from 'fastify';
import cors from '@fastify/cors';
import { routes } from './src/routes';

const app = fastify();

// Registro do CORS com a origem permitida do frontend
app.register(cors, {
    origin: 'https://main--wondrous-semifreddo-cfdac0.netlify.app', // Permite a origem do Netlify
    methods: ['GET', 'POST'], // Métodos permitidos
    allowedHeaders: ['Content-Type'], // Adicione outros headers se necessário
});

// Registro das rotas
app.register(routes);

export default async (req, res) => {
    await app.ready(); // Garante que o Fastify está pronto
    app.server.emit('request', req, res); // Delega as requisições para o Fastify
};
