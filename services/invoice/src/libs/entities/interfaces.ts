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
  invoiceRepository:any;
  expenseRepository:any;
  
  
}

export interface useCaseData {
  signupUser_UseCase: (dependencies: DepenteniciesData) => {
    execute: ({ email, password }: IUser, comapanyName: string) => Promise<any>;
  };

  verifyUser_UseCase: (dependencies: DepenteniciesData) => {
    execute: (verificationData: string, comapanyName: string) => any;
  }



  




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
  createInvoice_UseCase:any
  createExpense_UseCase:any
  getInvoiceById_UseCase:any
  getAllInvoices_UseCase:any
  getAllExpense_UseCase:any
  getExpenseById_UseCase:any
  editExpense_UseCase:any
  editInvoice_UseCase:any 
  getAllRecievables_UseCase:any
  getChartData_UseCase:any
  getExpensePiChartData_UseCase:any
  getSalesTableData_UseCase:any
  getSalesByCustomer_UseCase:any
  getSalesByItem_UseCase:any
  getInvoiceDetails_UseCase:any
  getPendingSales_UseCase:any
  getRecievedPayments_UseCase:any
  getExpenseDetails_UseCase:any
  getExpenseByEachCategory_UseCase:any
}
