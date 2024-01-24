
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";


export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getExpensePiChartData_UseCase },
  } = dependencies;
  const getExpensePichartData = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const companyName = req.headers['currentorganization'];
      const expenseChartData = await getExpensePiChartData_UseCase(dependencies).execute(companyName);
      res
        .status(201)
        .json({ message: "expensechartData data fetched Succesfully ", expenseChartData }); 
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  return getExpensePichartData;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });  gggggg
              