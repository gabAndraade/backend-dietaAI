import fastify from 'fastify';
import cors from '@fastify/cors';
import { routes } from './src/routes';

const app = fastify();

app.register(cors);
app.register(routes);

export default async (req, res) => {
    await app.ready(); // Garante que o Fastify está pronto
    app.server.emit('request', req, res); // Delega as requisições para o Fastify
};
