

import { DepenteniciesData } from "../../entities/interfaces";

export const getExpenseById_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { expenseRepository,tenantRepository },
  } = dependencies;

  if (!expenseRepository||!tenantRepository)
    throw new Error("The expenseRepository tenantRepository should be dependencie");

  const execute = async (comapanyName:string,id:string) => {
    
    const model = await tenantRepository.getCompanySchema(comapanyName,"Expenses")
    return expenseRepository.findexpenseById(id,model);
  };
  return {
    execute,
  };
};
