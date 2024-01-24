import getCustomersController from "./getCustomersController";
import getSingleCustomerController from "./getSingleCustomerController";


export = (dependencies: any) => {
  return {
    getCustomersController:getCustomersController(dependencies),
    getSingleCustomerController:getSingleCustomerController(dependencies)
  };
};
