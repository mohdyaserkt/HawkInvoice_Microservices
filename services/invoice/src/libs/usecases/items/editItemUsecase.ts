
import { DepenteniciesData } from "../../entities/interfaces";
import { Iitems, itemsRegistrationData } from "../../entities";

export const editItem_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { itemsRepository,tenantRepository },
  } = dependencies;

  if (!itemsRepository||!tenantRepository)
    throw new Error("The itemsRepository tenantRepository should be dependencie");

const execute = async (item: Iitems,comapanyName:string) => {
    

    const itemsData = new itemsRegistrationData(item);
    const model = await tenantRepository.getCompanySchema(comapanyName,"Items")
    return itemsRepository.updateItem(itemsData,model);
  };
  return {
    execute,
  };
};
