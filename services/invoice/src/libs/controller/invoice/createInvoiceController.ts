import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";
import { natsWrapper } from "../../../nats-wrapper";
// import { customerCreatedPublisher } from "../../../events/publisher/customerCreatedEvent";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { createInvoice_UseCase },
  } = dependencies;
  const createInvoice = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const invoiceData = req.body;
      const companyName = req.headers['currentorganization'];
      console.log(companyName,"name of company in ");
      
      const customer = await createInvoice_UseCase(dependencies).execute(
       invoiceData,
        companyName
      );
// await new customerCreatedPublisher(natsWrapper.client).publish(customer);
      res
        .status(201)
        .json({ message: "invoice Created Succesfully ", customer });
    } catch (error) {
      console.log(error);
      console.log(JSON.parse(JSON.stringify(error)).code);
      if (JSON.parse(JSON.stringify(error)).code === 11000) {
        res.status(409).json({ error: "invoice already exists" });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  };
  return createInvoice;
};


