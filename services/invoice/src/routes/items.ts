import express from "express";

import { itemsController } from "../libs/controller";
import { DepenteniciesData } from "../libs/entities/interfaces";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const { getItemsController, getSingleItemController } =
    itemsController(dependencies);

  router.get("/get-items", getItemsController);
  router.get("/get-singleitem/:itemId", getSingleItemController);

  return router;
};
