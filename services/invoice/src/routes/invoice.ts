import express from "express";

import { invoiceController } from "../libs/controller";
import { DepenteniciesData } from "../libs/entities/interfaces";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const {createInvoiceController,getInvoiceByIdController,getAllInvoiceController,editInvoiceController} =
  invoiceController(dependencies);


  router.post("/create-invoice", createInvoiceController);
  router.get("/get-invoices", getAllInvoiceController);
  router.get("/get-invoice/:invoiceId", getInvoiceByIdController);
  router.post("/edit-invoice",editInvoiceController );
  
  

  
  return router;
};




