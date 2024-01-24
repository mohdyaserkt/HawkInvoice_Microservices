
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";


export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getAllInvoices_UseCase },
  } = dependencies;
  const getAllInvoices = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const companyName = req.headers['currentorganization'];
      const invoices = await getAllInvoices_UseCase(dependencies).execute(companyName);
      res
        .status(201)
        .json({ message: "invoices data fetched Succesfully ", invoices }); 
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  return getAllInvoices;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });  gggggg
              