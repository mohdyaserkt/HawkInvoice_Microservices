import {
  userRepository,
  tenantRepository,
  organizationRepository,
  customerRepository,
  itemsRepository
} from "../libs/app/repository/mongo";
import { repositoryData, useCaseData } from "../libs/entities/interfaces";
import {
  signupUser_UseCase,
  createTenant_UseCase,
  verifyUser_UseCase,
  findMyTenants_UseCase,
  createOrganization_UseCase,
  createCustomer_UseCase,
  createItem_UseCase,
  getAllCustomers_UseCase,
  getAllItems_UseCase,
  editItem_UseCase,
  getSingleItems_UseCase,editCustomer_UseCase,getSingleCustomer_UseCase
} from "../libs/usecases";

const useCases:useCaseData = {
  signupUser_UseCase,
  createTenant_UseCase,
  verifyUser_UseCase,
  createCustomer_UseCase,
  createItem_UseCase,
  getAllCustomers_UseCase,
  getAllItems_UseCase,
  findMyTenants_UseCase,
  createOrganization_UseCase,
  editItem_UseCase,
  getSingleItems_UseCase,
  editCustomer_UseCase,
  getSingleCustomer_UseCase
};

const repository:repositoryData = {
  userRepository,
  tenantRepository,
  organizationRepository,
  customerRepository,
  itemsRepository,
};

export = {
  useCases,
  repository,
};
