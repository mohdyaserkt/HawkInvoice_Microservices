import express from "express";
import { DepenteniciesData } from "../libs/entities/interfaces";

import customerRoutes from "./customer";
import itemsRoutes from "./items";

export const routes = (dependencies: DepenteniciesData) => {
  const router = express.Router();

  
  const customer = customerRoutes(dependencies)
  const item = itemsRoutes(dependencies)

  
  router.use("/customer",customer );
  router.use("/customer/item",item );


  return router;
};
  