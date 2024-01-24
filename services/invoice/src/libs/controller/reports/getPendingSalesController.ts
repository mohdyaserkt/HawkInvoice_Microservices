
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";


export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getPendingSales_UseCase },
  } = dependencies;
  const getPendingSales = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const companyName = req.headers['currentorganization'];
      const PendingSales = await getPendingSales_UseCase(dependencies).execute(companyName);
      res
        .status(201)
        .json({ message: "invoiceDetails data fetched Succesfully ", PendingSales }); 
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  return getPendingSales;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });  gggggg
              