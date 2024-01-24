import express from "express";
import { DepenteniciesData } from "../libs/entities/interfaces";

import invoiceRoutes from "./invoice";
import expenseRoutes from "./expense";
import itemRoutes from "./items";
import customerRoutes from "./customer";
import homeRoutes from "./home";
import reportRoutes from "./reports";

export const routes = (dependencies: DepenteniciesData) => {
  const router = express.Router();

  
  const invoice = invoiceRoutes(dependencies)
  const expense = expenseRoutes(dependencies)
  const items = itemRoutes(dependencies)
  const customer = customerRoutes(dependencies)
  const home = homeRoutes(dependencies)
  const report = reportRoutes(dependencies)
 

  
  router.use("/invoice",invoice );
  router.use("/invoice/expense",expense );
  router.use("/invoice/home",home );
  router.use("/invoice/report",report );
  router.use("/invoice/items",items );
  router.use("/invoice/customer",customer );
  


  return router;
};
  