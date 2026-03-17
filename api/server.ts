import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { routes } from "./routes";

dotenv.config();

const app = Fastify({ logger: true });

app.register(cors, {
  origin: "https://wondrous-semifreddo-cfdac0.netlify.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Accept"],
  credentials: true,
  strictPreflight: false,
  preflight: true,
});

app.register(routes);

export default async function handler(req: any, res: any) {
  await app.ready();

  res.setHeader("Access-Control-Allow-Origin", "https://wondrous-semifreddo-cfdac0.netlify.app");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, Accept");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  app.inject(
    {
      method: req.method,
      url: req.url,
      headers: req.headers,
      payload: req.body,
    },
    (err, response) => {
      if (err) {
        res.statusCode = 500;
        res.end(err.message);
        return;
      }
      res.statusCode = response.statusCode;
      Object.entries(response.headers).forEach(([key, value]) => {
        res.setHeader(key, value as string);
      });
      res.end(response.body);
    }
  );
}

// Start local
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
