
import { DepenteniciesData } from "../../entities/interfaces";
import { Iitems, itemsRegistrationData } from "../../entities";

export const getAllCustomers_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { customerRepository,tenantRepository },
  } = dependencies;

  if (!customerRepository||!tenantRepository)
    throw new Error("The customerRepository tenantRepository should be dependencie");

  const execute = async (comapanyName:string) => {
    
    const model = await tenantRepository.getCompanySchema(comapanyName,"Customers")
    return customerRepository.findCustomers(model);
  };
  return {
    execute,
  };
};
