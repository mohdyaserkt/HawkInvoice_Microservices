
import { DepenteniciesData } from "../../entities/interfaces";
import { ICustomer, Iitems, itemsRegistrationData } from "../../entities";
import { cutomerRegistrationData } from "../../entities/customer";

export const editCustomer_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { customerRepository,tenantRepository },
  } = dependencies;

  if (!customerRepository||!tenantRepository)
    throw new Error("The itemsRepository tenantRepository should be dependencie");

  const execute = async (customer: ICustomer,comapanyName:string) => {
    

    const customerData = new cutomerRegistrationData(customer);
    const model = await tenantRepository.getCompanySchema(comapanyName,"Customers")
    return customerRepository.updateCustomer(customerData,model);
  };
  return {
    execute,
  };
};
