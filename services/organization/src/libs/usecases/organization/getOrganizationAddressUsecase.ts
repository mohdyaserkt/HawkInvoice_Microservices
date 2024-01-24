
import { DepenteniciesData } from "../../entities/interfaces";


export const getOrganizationAddress_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { organizationRepository,tenantRepository },
  } = dependencies;

  if (!organizationRepository)
    throw new Error("The user repository should be dependencie");

  const execute = async (comapanyName:string) => {
    console.log(comapanyName,"company name");
    
    const model = await tenantRepository.getCompanySchema(comapanyName,"Organization")
    return organizationRepository.findOrganizationAddress(model);
  };
  return {
    execute,
  };
};
