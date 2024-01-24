
import { DepenteniciesData } from "../../entities/interfaces";

export const getSingleCustomer_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { customerRepository,tenantRepository },
  } = dependencies;

  if (!customerRepository||!tenantRepository)
    throw new Error("The customerRepository tenantRepository should be dependencie");

  const execute = async (comapanyName:string,id:string) => {
    
    const model = await tenantRepository.getCompanySchema(comapanyName,"Customers")
    return customerRepository.findCustomerById(id,model);
  };
  return {
    execute,
  };
};
