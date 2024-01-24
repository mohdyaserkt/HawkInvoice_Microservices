import express from "express";
import { body, validationResult } from "express-validator";
import { BadRequestError, currentUser, requireAuth } from "@y48er-invoices/common";



import { userController } from "../libs/controller";
import { DepenteniciesData } from "../libs/entities/interfaces";

export = (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const {loginController, signUpController,userVerificationMailController,verifyUserController } =
    userController(dependencies);


  router.post("/login", loginController);
  router.post("/signup", signUpController);
  router.patch("/verify-email",verifyUserController)
  router.post("/sendverifyemail",userVerificationMailController)
  

  return router;
};
