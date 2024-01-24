import createCustomerController from "./createCustomerController";
import getCustomersController from "./getCustomersController";
import editCustomerController from "./editCustomerController";
import getSingleCustomerController from "./getSingleCustomerController";


export = (dependencies: any) => {
  return {
    createCustomerController: createCustomerController(dependencies),
    getCustomersController:getCustomersController(dependencies),
    editCustomerController:editCustomerController(dependencies),
    getSingleCustomerController:getSingleCustomerController(dependencies)
  };
};
