
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";


export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getAllRecievables_UseCase },
  } = dependencies;
  const getAllRecievables = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const companyName = req.headers['currentorganization'];
      const allRecievables = await getAllRecievables_UseCase(dependencies).execute(companyName);
      res
        .status(201)
        .json({ message: "allRecievables data fetched Succesfully ", allRecievables }); 
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  return getAllRecievables;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });  gggggg
              