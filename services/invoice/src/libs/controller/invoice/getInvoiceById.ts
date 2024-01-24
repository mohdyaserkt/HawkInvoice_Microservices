
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";


export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getInvoiceById_UseCase },
  } = dependencies;
  const getInvoiceById= async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const companyName = req.headers['currentorganization'];
        const id=req.params.invoiceId
      const invoice = await getInvoiceById_UseCase(dependencies).execute(companyName,id);
      res
        .status(201)
        .json({ message: "invoice data fetched Succesfully ", invoice });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  return getInvoiceById;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });
