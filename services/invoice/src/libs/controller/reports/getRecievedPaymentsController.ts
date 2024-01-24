
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";


export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getRecievedPayments_UseCase },
  } = dependencies;
  const getRecievedPayments = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const companyName = req.headers['currentorganization'];
      const recievedPayments = await getRecievedPayments_UseCase(dependencies).execute(companyName);
      res
        .status(201)
        .json({ message: "invoiceDetails data fetched Succesfully ", recievedPayments }); 
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  return getRecievedPayments;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });  gggggg
              