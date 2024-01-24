
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";


export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getAllItems_UseCase },
  } = dependencies;
  const getAllItems = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const companyName = req.headers['currentorganization'];
      const items = await getAllItems_UseCase(dependencies).execute(companyName);
      res
        .status(201)
        .json({ message: "items data fetched Succesfully ", items });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  return getAllItems;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });
