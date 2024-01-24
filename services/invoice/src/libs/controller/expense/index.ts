import createExpenseController from "./createExpenseController";
import getAllExpensesController from "./getAllExpensesController";
import editExpensesController from "./editExpenseController";
import getExpenseByIdController from "./getExpenseByIdController";



export = (dependencies: any) => {
  return {
    createExpenseController: createExpenseController(dependencies),
    getAllExpensesController: getAllExpensesController(dependencies),
    editExpensesController: editExpensesController(dependencies),
    getExpenseByIdController:getExpenseByIdController(dependencies)
  };
};
