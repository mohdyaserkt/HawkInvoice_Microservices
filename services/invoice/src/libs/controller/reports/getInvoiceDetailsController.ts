
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";


export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getInvoiceDetails_UseCase },
  } = dependencies;
  const getInvoiceDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const companyName = req.headers['currentorganization'];
      const invoiceDetails = await getInvoiceDetails_UseCase(dependencies).execute(companyName);
      res
        .status(201)
        .json({ message: "invoiceDetails data fetched Succesfully ", invoiceDetails }); 
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  return getInvoiceDetails;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });  gggggg
              