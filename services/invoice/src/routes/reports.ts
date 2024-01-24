import express from "express";

import { reportsController } from "../libs/controller";
import { DepenteniciesData } from "../libs/entities/interfaces";


export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const { getSalesbyCustomerController,getSalesbyItemController,getInvoiceDetailsController,getPendingSalesController,getRecievedPaymentsController,getExpenseDetailsController,getExpenseByEachCategoryController} =
  reportsController(dependencies);


  
  router.get("/get-salesbycustomer",getSalesbyCustomerController );
  router.get("/get-salesbyitem",getSalesbyItemController );
  router.get("/get-invoicedetails",getInvoiceDetailsController );
  router.get("/get-pendingsales",getPendingSalesController );
  router.get("/get-recievedpayments",getRecievedPaymentsController );
  router.get("/get-expensedetails",getExpenseDetailsController );
  router.get("/get-expensebyeachcategory",getExpenseByEachCategoryController );
 
  


  
  return router;
}




