import express from "express";
import { body, validationResult } from "express-validator";
import { BadRequestError, currentUser, requireAuth } from "@y48er-invoices/common";

import { organizationController } from "../libs/controller";
import { DepenteniciesData } from "../libs/entities/interfaces";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const {createOrganizationController ,getOrganizationAdressController} =
  organizationController(dependencies);


  router.post("/create-organization", createOrganizationController);
  router.get("/get-organization-address", getOrganizationAdressController);

  

  return router;
};




