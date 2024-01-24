
import { DepenteniciesData } from "../../entities/interfaces";
import { Iitems, itemsRegistrationData } from "../../entities";

export const getAllItems_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { itemsRepository,tenantRepository },
  } = dependencies;

  if (!itemsRepository||!tenantRepository)
    throw new Error("The itemsRepository tenantRepository should be dependencie");

  const execute = async (comapanyName:string) => {
    
    const model = await tenantRepository.getCompanySchema(comapanyName,"Items")
    return itemsRepository.findItems(model);
  };
  return {
    execute,
  };
};
