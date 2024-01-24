import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";
import { BadRequestError } from "@y48er-invoices/common";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { verifyUser_UseCase },
  } = dependencies;
  const verifyUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      
      
      const { verificationData } = req.body;
      const verification = await verifyUser_UseCase(dependencies).execute(
        verificationData);

      if (!verification) {
        res.status(400).json({ error: "Invalid Verification Link" });
      } else {
        res.status(200).json({ message: "Verified successfully" });
      }
      
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
  return verifyUser;
};
