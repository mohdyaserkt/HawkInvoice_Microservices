import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";
import { natsWrapper } from "../../../nats-wrapper";
// import { customerCreatedPublisher } from "../../../events/publisher/customerCreatedEvent";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { createExpense_UseCase },
  } = dependencies;
  const createExpense = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const expenseData = req.body;
      const companyName = req.headers['currentorganization'];
      console.log(companyName,"name of company in ");
      
      const expense = await createExpense_UseCase(dependencies).execute(
       expenseData,
        companyName
      );
// await new expenseCreatedPublisher(natsWrapper.client).publish(expense);
      res
        .status(201)
        .json({ message: "eexpense Created Succesfully ", expense });
    } catch (error) {
      console.log(error);
      console.log(JSON.parse(JSON.stringify(error)).code);
      if (JSON.parse(JSON.stringify(error)).code === 11000) {
        res.status(409).json({ error: "expense already exists" });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  };
  return createExpense;
};


