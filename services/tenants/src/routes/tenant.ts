import express from "express";
import { body, validationResult } from "express-validator";
import {
  BadRequestError,
  currentUser,
  requireAuth,
} from "@y48er-invoices/common";

import { tenantController } from "../libs/controller";
import { DepenteniciesData } from "../libs/entities/interfaces";
import UserAutherization from "@y48er-invoices/common/build/middlewares/userAuthentication";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const { createTenantController,findMyTenantsController } = tenantController(dependencies);

  router.post("/create-tenant",UserAutherization,createTenantController );
  router.post("/find-tenants",UserAutherization,findMyTenantsController);
  

  return router;
};
