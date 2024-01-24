
import { DepenteniciesData } from "../../entities/interfaces";
import bcrypt from "bcrypt";
import {
  IOrganization,
  organizationRegistrationData,
} from "../../entities/organization";
import { Iitems, itemsRegistrationData } from "../../entities";

export const createItem_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { itemsRepository,tenantRepository },
  } = dependencies;

  if (!itemsRepository||!tenantRepository)
    throw new Error("The itemsRepository tenantRepository should be dependencie");

  const execute = async ({
    description,
    name,
    sellingPrice,
    type,
    unit
  }: Iitems,comapanyName:string) => {
    

    const itemsData = new itemsRegistrationData({
      description,
      name,
      sellingPrice,
      type,
      unit
    });
    const model = await tenantRepository.getCompanySchema(comapanyName,"Items")
    return itemsRepository.createItem(itemsData,model);
  };
  return {
    execute,
  };
};
