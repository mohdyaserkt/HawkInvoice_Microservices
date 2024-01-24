import { userRepository, tenantRepository } from "../libs/app/repository/mongo";
import {
  signupUser_UseCase,
  createTenant_UseCase,
  loginUser_UseCase,
  verifyUser_UseCase,
  userVerificationMail_UseCase,
  findMyTenants_UseCase

} from "../libs/usecases";

const useCases = {
  signupUser_UseCase,
  createTenant_UseCase,
  loginUser_UseCase,
  verifyUser_UseCase,
  userVerificationMail_UseCase,
  findMyTenants_UseCase
};

const repository = {
  userRepository,
  tenantRepository,
};

export = {
  useCases,
  repository,
};
