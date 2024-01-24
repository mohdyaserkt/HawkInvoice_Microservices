import express from "express";

import { itemsController } from "../libs/controller";
import { DepenteniciesData } from "../libs/entities/interfaces";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const {createItemController,getItemsController,editItemsController,getSingleItemController } =
  itemsController(dependencies);


  router.post("/create-item", createItemController);
  router.post("/edit-item", editItemsController);
  router.get("/get-items", getItemsController);
  router.get("/get-singleitem/:itemId", getSingleItemController)


  

  return router;
};


 

