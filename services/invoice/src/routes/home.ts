import express from "express";

import { homeController } from "../libs/controller";
import { DepenteniciesData } from "../libs/entities/interfaces";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const { getAllRecievablesController,getSalesChartDataController,getExpenseChartDataController,getSalesTableDataController} =
  homeController(dependencies);


  
  router.get("/get-allrecievables",getAllRecievablesController );
  router.get("/get-chartdata",getSalesChartDataController );
  router.get("/get-expensechartdata",getExpenseChartDataController);
  router.get("/get-salestabledata",getSalesTableDataController);
  
  


  
  return router;
};




