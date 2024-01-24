
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";


export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getExpenseDetails_UseCase },
  } = dependencies;
  const getExpenseDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const companyName = req.headers['currentorganization'];
      const expenseDetails = await getExpenseDetails_UseCase(dependencies).execute(companyName);
      res
        .status(201)
        .json({ message: "expenseDetails data fetched Succesfully ", expenseDetails }); 
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  return getExpenseDetails;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });  gggggg
              