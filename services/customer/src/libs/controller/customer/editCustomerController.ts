import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { editCustomer_UseCase },
  } = dependencies;
  const editCustomer = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const customer = req.body;
      const companyName = req.headers['currentorganization'];
      const updatedCustomer = await editCustomer_UseCase(
        dependencies
      ).execute(customer, companyName);

      res
        .status(201)
        .json({ message: "customer Updated Succesfully ", updatedCustomer });
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
  return editCustomer;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });
