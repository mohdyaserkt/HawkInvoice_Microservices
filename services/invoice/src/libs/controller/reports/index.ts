
import getSalesbyCustomerController from "./getSalesbyCustomerController";
import getSalesbyItemController from "./getSalesbyItemController";
import getInvoiceDetailsController from "./getInvoiceDetailsController";
import getPendingSalesController from "./getPendingSalesController";
import getRecievedPaymentsController from "./getRecievedPaymentsController";
import getExpenseDetailsController from "./getExpenseDetailsController";
import  getExpenseByEachCategoryController from "./getExpenseByEachCategoryController";




export = (dependencies: any) => {
  return {
    getSalesbyCustomerController:getSalesbyCustomerController(dependencies),
    getSalesbyItemController:getSalesbyItemController(dependencies),
    getInvoiceDetailsController:getInvoiceDetailsController(dependencies),
    getPendingSalesController:getPendingSalesController(dependencies),
    getRecievedPaymentsController:getRecievedPaymentsController(dependencies),
    getExpenseDetailsController:getExpenseDetailsController(dependencies),
    getExpenseByEachCategoryController:getExpenseByEachCategoryController(dependencies),
   
  };
};
