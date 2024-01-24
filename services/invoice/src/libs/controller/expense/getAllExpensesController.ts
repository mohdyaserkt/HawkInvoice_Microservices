
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";


export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getAllExpense_UseCase },
  } = dependencies;
  const getAllExpenses= async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const companyName = req.headers['currentorganization'];
      const expenses = await getAllExpense_UseCase(dependencies).execute(companyName);
      res
        .status(201)
        .json({ message: "Expenses data fetched Succesfully ", expenses }); 
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  return getAllExpenses;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });  gggggg
              