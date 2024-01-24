
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";


export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getExpenseById_UseCase },
  } = dependencies;
  const getExpenseById= async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const companyName = req.headers['currentorganization'];
        const id=req.params.expenseId
      const expense = await getExpenseById_UseCase(dependencies).execute(companyName,id);
      res
        .status(201)
        .json({ message: "expense  fetched Succesfully ", expense });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  return getExpenseById;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });
