import { IUser, userRegistrationData } from "../../entities";
import { DepenteniciesData } from "../../entities/interfaces";
import bcrypt,{} from 'bcrypt'

export const signupUser_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { userRepository,tenantRepository },
  } = dependencies;

  if (!userRepository)
    throw new Error("The user repository should be dependencie");

  const  execute =async ({
    email,
    isGoogle,
    status,
    verified,
    profile,
  }: IUser) => {
    const userData= new userRegistrationData({
      email,
      isGoogle,
      status,
      verified,
      profile,
    });
    const model = await tenantRepository.getCompanySchema("hawkinvoice-tenants","User")
    return userRepository.createUser(userData,model)
  };
  return {
    execute,
  };
};
