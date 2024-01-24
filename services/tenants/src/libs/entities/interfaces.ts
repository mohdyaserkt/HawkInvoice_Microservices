import { IUser, IVerifyUser, userRegistrationData } from "./User";

export interface DepenteniciesData {
  useCases: useCaseData;
  repository: repositoryData;
}

export interface repositoryData {
  userRepository: { 
    findById(id: string): unknown;
    createUser(userData: userRegistrationData): any;

    verifyEmail(arg0: { id: string; verifyToken: string,email:string }): any;

    logInUser(arg0: { email: string; password: string }): any;
  
    
  }; 

  tenantRepository:any

}

export interface useCaseData {
  signupUser_UseCase: (dependencies: DepenteniciesData) => {
    execute: ({ email, password }: IUser) => Promise<IUser>;
  };

  loginUser_UseCase: (dependencies: DepenteniciesData) => {
    execute: ({ email, password }: IUser) => Promise<IUser | string>;
  };

  verifyUser_UseCase: (dependencies: DepenteniciesData) => {
    execute: (verificationData: string) => any;
  };
  
  userVerificationMail_UseCase:any

  findMyTenants_UseCase:any
  createTenant_UseCase:any
 
}   
