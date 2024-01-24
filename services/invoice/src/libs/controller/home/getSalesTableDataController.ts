
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";


export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getSalesTableData_UseCase },
  } = dependencies;
  const getTableData = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const companyName = req.headers['currentorganization'];
      const tableData = await getSalesTableData_UseCase(dependencies).execute(companyName);
      res
        .status(201)
        .json({ message: "tableData data fetched Succesfully ", tableData }); 
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  return getTableData;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });  gggggg
              