
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";


export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getSalesByCustomer_UseCase },
  } = dependencies;
  const getSalesByCustomer = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const companyName = req.headers['currentorganization'];
      const salesByCustomerData = await getSalesByCustomer_UseCase(dependencies).execute(companyName);
      res
        .status(201)
        .json({ message: "getSalesByCustomerData data fetched Succesfully ", salesByCustomerData }); 
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  return getSalesByCustomer;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });  gggggg
              