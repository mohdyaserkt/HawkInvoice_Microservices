import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";
import { itemCreatedPublisher } from "../../../events/publisher/itemCreatedEvent";
import { natsWrapper } from "../../../nats-wrapper";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { createItem_UseCase },
  } = dependencies;
  const createItem = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { description, name, sellingPrice, type, unit } = req.body;
      const companyName = req.headers['currentorganization'] as string;
      const item = await createItem_UseCase(dependencies).execute(
        { description, name, sellingPrice, type, unit },
        companyName
      );
await new itemCreatedPublisher(natsWrapper.client).publish({item,companyName});
      res.status(201).json({ message: "item Created Succesfully ", item });
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
  return createItem;
};


