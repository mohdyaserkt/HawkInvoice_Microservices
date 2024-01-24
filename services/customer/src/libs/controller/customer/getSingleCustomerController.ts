
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";


export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getSingleCustomer_UseCase },
  } = dependencies;
  const getSingleCustomer= async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const companyName = req.headers['currentorganization'];
        const id=req.params.customerId
      const customer = await getSingleCustomer_UseCase(dependencies).execute(companyName,id);
      res
        .status(201)
        .json({ message: "customer data fetched Succesfully ", customer });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  return getSingleCustomer;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });
