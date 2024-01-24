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
    password,
    isGoogle,
    status,
    verified,
    profile,
  }: IUser,comapanyName:string) => {
    password=await bcrypt.hash(password,10)
    const userData= new userRegistrationData({
      email,
      password,
      isGoogle,
      status,
      verified,
      profile,
    });
    const model = await tenantRepository.getCompanySchema(comapanyName,"User")
    return userRepository.createUser(userData,model)
  };
  return {
    execute,
  };
};
