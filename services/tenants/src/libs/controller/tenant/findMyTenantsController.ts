import dependencies from "../../../config/dependencies";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";
import { BadRequestError } from "@y48er-invoices/common";
import { UserCreatedPublisher } from "../../../events/publisher/UserCreatedEvent";
import { natsWrapper } from "../../../nats-wrapper";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { findMyTenants_UseCase },
  } = dependencies;
  const findMyTenants = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.body;
      const tenants = await findMyTenants_UseCase(dependencies).execute(id );
      res
        .status(201)
        .json({ message: "Tenants data fetched Succesfully ", tenants });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  return findMyTenants;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });
