import express, { Request, Response, json } from "express";

import cookieSession from "cookie-session";
import { routes } from "./routes";
import depentencies from "./config/dependencies";
import cors from "cors"

const app = express();
app.set("trust-proxy", true);
app.use(json());
app.use(cors({
  origin: ['http://localhost:3000', 'https://hawkinvoice-client.vercel.app'],
  methods: ['GET', 'POST']
}));
app.use(
  cookieSession({
    signed: false,
  })
);

app.use("/api", routes(depentencies));

export { app };
    