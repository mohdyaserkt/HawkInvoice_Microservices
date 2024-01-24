
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
salutaion,billingAddress,shippingAddress

  }: ICustomer,comapanyName:string) => {
    console.log(shippingAddress,billingAddress,"ship of company in usecase ");
    

    const customerData = new cutomerRegistrationData({
      displayName,
      email,
      workPhone,
      firstName,
      lastName,
      customerType,
      customerCompanyName,
      mobile,
      salutaion,
      billingAddress,
      shippingAddress

    });
    console.log(customerData,"rd data alklll of company in ");

    const model = await tenantRepository.getCompanySchema(comapanyName,"Customers")
    return customerRepository.createCustomer(customerData,model);
  };
  return {
    execute,
  };
};
