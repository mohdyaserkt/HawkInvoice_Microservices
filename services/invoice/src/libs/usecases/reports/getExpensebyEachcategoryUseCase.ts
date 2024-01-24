
import { DepenteniciesData } from "../../entities/interfaces";

export const getExpenseByEachCategory_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { tenantRepository,expenseRepository },
  } = dependencies;

  if (!expenseRepository||!tenantRepository)
    throw new Error("The expenseRepository tenantRepository should be dependencie");

  const execute = async (comapanyName:string) => {
    
    const model = await tenantRepository.getCompanySchema(comapanyName,"Expenses")
    return expenseRepository.totalExpenseByEachCategoryandcount(model);
  };
  return {
    execute,
  };
};
