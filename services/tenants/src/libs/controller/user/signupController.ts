import dependencies from "../../../config/dependencies";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";
import { BadRequestError } from "@y48er-invoices/common";
import { UserCreatedPublisher } from "../../../events/publisher/UserCreatedEvent";
import { natsWrapper } from "../../../nats-wrapper";
import { generateAccessToken } from "../../utils/jwtAuthentication";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { signupUser_UseCase },
  } = dependencies;
  const signupUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { email, password } = req.body;
      const user = await signupUser_UseCase(dependencies).execute({
        email,
        password,
      });

      await new UserCreatedPublisher(natsWrapper.client).publish({
    email: user.email,
    isGoogle:user.isGoogle,
    profile:user.profile,
    status:user.status,
    verified:user.verified,
    id:user.id
   
  });
  console.log(user.id,"userid");
  

  const AccessToken=generateAccessToken(user.id as string)

      res.status(201).json({ message: "Signup successful", user,AccessToken });
    } catch (error) {
      console.log(error);
      console.log(JSON.parse(JSON.stringify(error)).code);
      if (JSON.parse(JSON.stringify(error)).code === 11000) {
        res.status(409).json({ error: "Email already exists" });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  };
  return signupUser;
};


