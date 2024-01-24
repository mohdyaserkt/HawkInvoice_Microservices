
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";


export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getSalesByItem_UseCase },
  } = dependencies;
  const getSalesByItem = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const companyName = req.headers['currentorganization'];
      const getSalesByItemData = await getSalesByItem_UseCase(dependencies).execute(companyName);
      res
        .status(201)
        .json({ message: "getSalesByItemData data fetched Succesfully ", getSalesByItemData }); 
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  return getSalesByItem;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });  gggggg
              