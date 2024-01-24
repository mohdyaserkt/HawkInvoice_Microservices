import { IUser, IVerifyUser, userRegistrationData } from "./User";

export interface DepenteniciesData {
  useCases: useCaseData;
  repository: repositoryData;
}

export interface repositoryData {
  userRepository: {
    findById(id: string, userModel: any): unknown;
    createUser(userData: userRegistrationData, userModel: any): any;

    verifyEmail(
      arg0: { id: string; verifyToken: string; email: string },
      userModel: any
    ): any;
  };

  tenantRepository: any;
  organizationRepository: any;
  itemsRepository: any;
  customerRepository: any;
  
}

export interface useCaseData {
  signupUser_UseCase: (dependencies: DepenteniciesData) => {
    execute: ({ email, password }: IUser, comapanyName: string) => Promise<any>;
  };

  verifyUser_UseCase: (dependencies: DepenteniciesData) => {
    execute: (verificationData: string, comapanyName: string) => any;
  };

  createOrganization_UseCase: any;

  findMyTenants_UseCase: any;
  createTenant_UseCase: any;
  createCustomer_UseCase: any;
  createItem_UseCase: any;
  getAllCustomers_UseCase: any;
  getAllItems_UseCase: any;
  editItem_UseCase:any;
  getSingleItems_UseCase:any;
  editCustomer_UseCase:any;
  getSingleCustomer_UseCase:any;
}
