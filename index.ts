import fastify from 'fastify';
import cors from '@fastify/cors';
import { routes } from './src/routes';

const app = fastify();

app.register(cors, {
    origin: 'https://main--wondrous-semifreddo-cfdac0.netlify.app', // Permita a origem específica do frontend
    methods: ['GET', 'POST'], // Métodos que você quer permitir (adicione PUT, DELETE, etc. se necessário)
});

app.register(routes);

export default async (req, res) => {
    await app.ready(); // Garante que o Fastify está pronto
    app.server.emit('request', req, res); // Delega as requisições para o Fastify
};
