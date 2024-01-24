import express from "express";
import { DepenteniciesData } from "../libs/entities/interfaces";

import organizationRoutes from "./organization";

export const routes = (dependencies: DepenteniciesData) => {
  const router = express.Router();

  
  const organization = organizationRoutes(dependencies)

  
  router.use("/organization",organization );


  return router;
};
  