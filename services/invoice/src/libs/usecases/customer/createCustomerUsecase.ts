
import { DepenteniciesData } from "../../entities/interfaces";
import { ICustomer, Iitems, itemsRegistrationData } from "../../entities";
import { cutomerRegistrationData } from "../../entities/customer";

export const createCustomer_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { customerRepository,tenantRepository },
  } = dependencies;

  if (!customerRepository||!tenantRepository)
    throw new Error("The itemsRepository tenantRepository should be dependencie");

  const execute = async ({
  customerType,
  displayName,
  email,
firstName,
lastName,
workPhone,
customerCompanyName,
mobile,
salutaion

  }: ICustomer,comapanyName:string) => {
    

    const customerData = new cutomerRegistrationData({
      displayName,
      email,
      workPhone,
      firstName,
      lastName,
      customerType,
      customerCompanyName,
      mobile,
      salutaion
    });
    const model = await tenantRepository.getCompanySchema(comapanyName,"Customers")
    return customerRepository.createCustomer(customerData,model);
  };
  return {
    execute,
  };
};
