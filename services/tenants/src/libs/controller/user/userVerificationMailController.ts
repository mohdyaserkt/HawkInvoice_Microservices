import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";


export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: {  userVerificationMail_UseCase},
  } = dependencies;
  const userVerificationMail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.body;
      const verification = await userVerificationMail_UseCase(dependencies).execute(id);

      if (!verification) {
        res.status(400).json({ error: "An error occurred while sending the email" });
      } else {
        res.status(200).json({ message: "Mail sent successfully",verification });
      }
      
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
  return userVerificationMail;
};
