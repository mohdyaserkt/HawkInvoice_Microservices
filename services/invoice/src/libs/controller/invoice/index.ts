import createInvoiceController from "./createInvoiceController";
import getInvoiceByIdController from "./getInvoiceById";
import getAllInvoiceController from "./getAllInvoicesController";
import editInvoiceController from "./editInvoiceController";




export = (dependencies: any) => {
  return {
    createInvoiceController: createInvoiceController(dependencies),
    getInvoiceByIdController: getInvoiceByIdController(dependencies),
    getAllInvoiceController: getAllInvoiceController(dependencies),
    editInvoiceController: editInvoiceController(dependencies),
  
  };
};
