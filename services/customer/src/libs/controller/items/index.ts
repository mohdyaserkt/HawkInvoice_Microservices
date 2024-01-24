import createItemController from "./createItemController";
import getItemsController from "./getItemsController";
import editItemsController from "./editItemController";
import getSingleItemController from "./getSingleItemController";

export = (dependencies: any) => {
  return {
    createItemController: createItemController(dependencies),
    getItemsController: getItemsController(dependencies),
    editItemsController:editItemsController(dependencies),
    getSingleItemController:getSingleItemController(dependencies)
  };
};
