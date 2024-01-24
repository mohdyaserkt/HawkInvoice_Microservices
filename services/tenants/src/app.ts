import express, { Request, Response, json } from "express";
import cors from "cors"

import cookieSession from "cookie-session";
import { routes } from "./routes";
import depentencies from "./config/dependencies";

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
    