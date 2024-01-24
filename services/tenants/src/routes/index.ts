import express from "express";
import { DepenteniciesData } from "../libs/entities/interfaces";
import userRoutes from "./user";
import tenantRoutes from "./tenant";

export const routes = (dependencies: DepenteniciesData) => {
  const router = express.Router();

  const user = userRoutes(dependencies);
  const tenant = tenantRoutes(dependencies)

  router.use("/tenant/user", user);
  router.use("/tenant",tenant );

  return router;
};
  