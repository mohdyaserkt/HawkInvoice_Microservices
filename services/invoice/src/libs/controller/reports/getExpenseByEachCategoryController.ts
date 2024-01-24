
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";


export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getExpenseByEachCategory_UseCase },
  } = dependencies;
  const expenseByEachCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const companyName = req.headers['currentorganization'];
      const expenseByEachCategory = await getExpenseByEachCategory_UseCase(dependencies).execute(companyName);
      res
        .status(201)
        .json({ message: "expenseByEachCategory data fetched Succesfully ", expenseByEachCategory }); 
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  return expenseByEachCategory;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });  gggggg
              