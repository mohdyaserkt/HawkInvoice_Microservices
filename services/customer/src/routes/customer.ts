import express from "express";

import { customerController } from "../libs/controller";
import { DepenteniciesData } from "../libs/entities/interfaces";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const {createCustomerController,getCustomersController,editCustomerController,getSingleCustomerController } =
  customerController(dependencies);


  router.post("/create-customer", createCustomerController);
  router.post("/edit-customer", editCustomerController);
  router.get("/get-customers", getCustomersController);
  router.get("/get-singlecustomer/:customerId", getSingleCustomerController);


  
  return router;
};




