import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getOrganizationAddress_UseCase },
  } = dependencies;
  const getOrganizationAddress = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const companyName = req.headers["currentorganization"];
      const organizationAddress = await getOrganizationAddress_UseCase(
        dependencies
      ).execute(companyName);

      res
        .status(201)
        .json({
          message: "Organization address fetched Succesfully ",
          organizationAddress,
        });
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "Internal server error" });
    }
  };
  return getOrganizationAddress;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });
