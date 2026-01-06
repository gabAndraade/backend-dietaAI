// server.ts
import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { routes } from "./routes";

dotenv.config();

const app = Fastify({ logger: true });

app.register(cors, {
  origin: "https://wondrous-semifreddo-cfdac0.netlify.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["*"],
});

app.register(routes);

export default async function handler(req: any, res: any) {
  await app.ready();
  app.server.emit("request", req, res);
}

if (process.env.NODE_ENV !== "production") {
  const start = async () => {
    try {
      await app.listen({ port: 3333, host: "0.0.0.0" });
      console.log("Servidor rodando no http://localhost:3333");
    } catch (err) {
      app.log.error(err);
      process.exit(1);
    }
  };
  start();
}
