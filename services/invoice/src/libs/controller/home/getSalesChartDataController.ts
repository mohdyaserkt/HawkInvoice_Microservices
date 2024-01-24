
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";


export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getChartData_UseCase },
  } = dependencies;
  const getChartData = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const companyName = req.headers['currentorganization'];
      const chartData = await getChartData_UseCase(dependencies).execute(companyName);
      res
        .status(201)
        .json({ message: "chartData data fetched Succesfully ", chartData }); 
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  return getChartData;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });  gggggg
                 