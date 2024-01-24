import getItemsController from "./getItemsController";

import getSingleItemController from "./getSingleItemController";

export = (dependencies: any) => {
  return {
    getItemsController: getItemsController(dependencies),
    getSingleItemController: getSingleItemController(dependencies),
  };
};
