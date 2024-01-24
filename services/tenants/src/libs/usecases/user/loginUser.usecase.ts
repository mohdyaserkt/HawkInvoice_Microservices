import { IUser } from "../../entities";
import { DepenteniciesData } from "../../entities/interfaces";

export const loginUser_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { userRepository },
  } = dependencies;

  if (!userRepository)
    throw new Error("The user repository should be dependencie");

  const execute = ({ email, password }: IUser) => {
    return userRepository.logInUser({ email, password });
  };
  return {
    execute,
  };
};
