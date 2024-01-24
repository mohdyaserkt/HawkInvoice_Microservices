import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { editItem_UseCase },
  } = dependencies;
  const editItem = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const items = req.body;
      const companyName = req.headers['currentorganization'];
      const item = await editItem_UseCase(dependencies).execute(
        items,
        companyName
      );

      res.status(201).json({ message: "item updated Succesfully ", item });
    } catch (error) {
      console.log(error);
      console.log(JSON.parse(JSON.stringify(error)).code);
      if (JSON.parse(JSON.stringify(error)).code === 11000) {
        res.status(409).json({ error: "item already exists" });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  };
  return editItem;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });
