
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";


export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getAllCustomers_UseCase },
  } = dependencies;
  const getAllCustomers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const companyName = req.headers['currentorganization'];
      const customers = await getAllCustomers_UseCase(dependencies).execute(companyName);
      res
        .status(201)
        .json({ message: "customers data fetched Succesfully ", customers });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  return getAllCustomers;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });
