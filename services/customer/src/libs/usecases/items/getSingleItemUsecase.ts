
import { DepenteniciesData } from "../../entities/interfaces";


export const getSingleItems_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { itemsRepository,tenantRepository },
  } = dependencies;

  if (!itemsRepository||!tenantRepository)
    throw new Error("The itemsRepository tenantRepository should be dependencie");

  const execute = async (comapanyName:string,id:string) => {
    
    const model = await tenantRepository.getCompanySchema(comapanyName,"Items")
    return itemsRepository.findItemsById(id,model);
  };
  return {
    execute,
  };
};
