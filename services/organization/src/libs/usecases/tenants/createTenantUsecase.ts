import { ITenant, IUser, tenantRegistrationData } from "../../entities";
import { DepenteniciesData } from "../../entities/interfaces";
import bcrypt from "bcrypt";

export const createTenant_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { tenantRepository },
  } = dependencies;

  if (!tenantRepository)
    throw new Error("The user repository should be dependencie");

  const execute = async ({
    businessName,
    typeOfbusiness,
    userId,
    email,
    NoOfemployes,
    annualRevenue,
    phoneNumber,
    
  }: ITenant) => {
    

    const tenantData = new tenantRegistrationData({
      businessName,
      typeOfbusiness,
      userId,
      email,
      NoOfemployes,
      annualRevenue,
      phoneNumber,
      
    });

    const model = await tenantRepository.getCompanySchema("hawkinvoice-tenants","Tenant")
    return tenantRepository.createTenant(tenantData,model);
  };
  return {
    execute,
  };
};
