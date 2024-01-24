import express from "express";

import { customerController } from "../libs/controller";
import { DepenteniciesData } from "../libs/entities/interfaces";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const {getCustomersController,getSingleCustomerController } =
  customerController(dependencies);

  router.get("/get-customers", getCustomersController);
  router.get("/get-singlecustomer/:customerId", getSingleCustomerController);


  
  return router;
};




