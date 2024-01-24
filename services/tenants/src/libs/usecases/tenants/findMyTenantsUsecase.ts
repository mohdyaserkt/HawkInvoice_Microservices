import { DepenteniciesData } from "../../entities/interfaces";

export const findMyTenants_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { tenantRepository },
  } = dependencies;

  if (!tenantRepository)
    throw new Error("The user repository should be dependencie");

  const execute = async (id: string) => {
    console.log("reached the find my tenants usecase",id);

    return tenantRepository.findOrganizations(id);
  };
  return {
    execute,
  };
};
