
import { DepenteniciesData } from "../../entities/interfaces";
import bcrypt from "bcrypt";
import {
  IOrganization,
  organizationRegistrationData,
} from "../../entities/organization";

export const createOrganization_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { organizationRepository,tenantRepository },
  } = dependencies;

  if (!organizationRepository)
    throw new Error("The user repository should be dependencie");

  const execute = async ({
    typeOfbusiness,
    userId,
    email,
    NoOfemployes,
    annualRevenue,
    businessName,
    phoneNumber,
    address
  }: IOrganization,comapanyName:string) => {
    

    const organizationData = new organizationRegistrationData({
      businessName,
      typeOfbusiness,
      userId,
      email,
      NoOfemployes,
      annualRevenue,
      address,
      phoneNumber,
    });
    const model = await tenantRepository.getCompanySchema(comapanyName,"Organization")
    return organizationRepository.createOrganization(organizationData,model);
  };
  return {
    execute,
  };
};
