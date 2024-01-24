import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";
import { natsWrapper } from "../../../nats-wrapper";
import { customerCreatedPublisher } from "../../../events/publisher/customerCreatedEvent";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { createCustomer_UseCase },
  } = dependencies;
  const createCustomer = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const {
        displayName,
        firstName,
        lastName,
        customerType,
        email,
        workPhone,
        customerCompanyName,
        mobile,
        salutaion,
        shippingAddress,
        billingAddress,
      } = req.body;
      const companyName: string = req.headers["currentorganization"] as string;

      console.log(companyName, "name of company in ");

      const customer = await createCustomer_UseCase(dependencies).execute(
        {
          displayName,
          firstName,
          lastName,
          customerType,
          email,
          workPhone,
          customerCompanyName,
          mobile,
          salutaion,
          shippingAddress,
          billingAddress,
        },
        companyName
      );

      await new customerCreatedPublisher(natsWrapper.client).publish({
        customer,
        companyName,
      });

      res
        .status(201)
        .json({ message: "customer Created Succesfully ", customer });
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
  return createCustomer;
};
