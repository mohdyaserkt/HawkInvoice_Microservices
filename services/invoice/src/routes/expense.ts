import express from "express";

import { ExpenseController } from "../libs/controller";
import { DepenteniciesData } from "../libs/entities/interfaces";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const {createExpenseController,getAllExpensesController,editExpensesController,getExpenseByIdController } =
  ExpenseController(dependencies);


  router.post("/create-Expense", createExpenseController);
  router.get("/get-expenses", getAllExpensesController);
  router.post("/edit-expense", editExpensesController);
  router.get("/get-expense/:expenseId", getExpenseByIdController);
  


  
  return router;
};




