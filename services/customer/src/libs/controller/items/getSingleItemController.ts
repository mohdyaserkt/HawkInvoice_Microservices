
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";


export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getSingleItems_UseCase },
  } = dependencies;
  const getSingleItem = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const companyName = req.headers['currentorganization'];
        const id=req.params.itemId
      const item = await getSingleItems_UseCase(dependencies).execute(companyName,id);
      res
        .status(201)
        .json({ message: "item data fetched Succesfully ", item });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  return getSingleItem;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });
