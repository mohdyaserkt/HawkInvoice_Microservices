import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";
import { BadRequestError } from "@y48er-invoices/common";
import { generateAccessToken } from "../../utils/jwtAuthentication";
import { IUser } from "../../entities";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { loginUser_UseCase },
  } = dependencies;
  const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const user:string|any= await loginUser_UseCase(dependencies).execute({
        email,
        password,
      });
    

      if (user === "email") {
        res.status(400).json({ error: "Invalid Email" });
      } else if (user === "password") {
        res.status(401).json({ error: "Invalid Password" });
      } else if (user === "notverified") {
        res.status(403).json({
          error: "Verification Pending",
          message: "Please check your email and verify your email.",
          notVerified: true,
        });
      } else {
        console.log(user.id);  
        
        const AccessToken=generateAccessToken(user.id as string)
        res.status(200).json({ message: "Login successful", user,AccessToken });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
  return loginUser;
};
