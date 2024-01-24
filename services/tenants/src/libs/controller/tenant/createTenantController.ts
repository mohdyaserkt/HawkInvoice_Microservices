import dependencies from "../../../config/dependencies";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";
import { BadRequestError } from "@y48er-invoices/common";
import { UserCreatedPublisher } from "../../../events/publisher/UserCreatedEvent";
import { natsWrapper } from "../../../nats-wrapper";
import { TenantCreatedPublisher } from "../../../events/publisher/TenantCreatedEvent";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { createTenant_UseCase },
  } = dependencies;
  const createTenant = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const {
        email,
        userId,
        businessName,
        typeOfbusiness,
        phoneNumber,
        NoOfemployes,
        annualRevenue,
        organizationAddress
      } = req.body;
      const tenant = await createTenant_UseCase(dependencies).execute({
        userId,
        email,
        businessName,
        typeOfbusiness,
        phoneNumber,
        NoOfemployes,
        annualRevenue,
      });
await new TenantCreatedPublisher(natsWrapper.client).publish({
   businessName:tenant.businessName,
   email:tenant.email,
   typeOfbusiness:tenant.typeOfbusiness,
   userId:tenant.userId,
   annualRevenue:tenant.annualRevenue,
   createdDate:tenant.createdDate,
   NoOfemployes:tenant.NoOfemployes,
   phoneNumber:tenant.phoneNumber,
   profile:tenant.profile,
   companyId:tenant._id,
   organizationAddress
  });
      res.status(201).json({ message: "Tenant Created Succesfully ", tenant });
    } catch (error) {
      console.log(error);
      console.log(JSON.parse(JSON.stringify(error)).code);
      if (JSON.parse(JSON.stringify(error)).code === 11000) {
        res.status(409).json({ error: "organization already exists" });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  };
  return createTenant;
};


