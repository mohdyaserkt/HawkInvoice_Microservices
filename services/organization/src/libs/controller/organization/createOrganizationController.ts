import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { createOrganization_UseCase },
  } = dependencies;
  const createTenant = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const {
        email,
        userId, 
        businessName,
        typeOfbusiness,
        phoneNumber,
        NoOfemployes,
        annualRevenue,
        address,
      } = req.body;
      const companyName = req.headers['currentorganization'];
      const organization = await createOrganization_UseCase(
        dependencies
      ).execute({
        userId,
        email,
        businessName,
        typeOfbusiness,
        phoneNumber,
        NoOfemployes,
        address,
        annualRevenue,
      },companyName);

      res
        .status(201)
        .json({ message: "Organization Created Succesfully ", organization });
    } catch (error) {
      console.log(error);
      console.log(JSON.parse(JSON.stringify(error)).code);
      if (JSON.parse(JSON.stringify(error)).code === 11000) {
        res.status(409).json({ error: "organization already exists" });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  };
  return createTenant;
};

// await new UserCreatedPublisher(natsWrapper.client).publish({
//     userId: userProfile.id,
//     email: userProfile.email,
//   });
