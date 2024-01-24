
import { DepenteniciesData } from "../../entities/interfaces";

export const getAllExpense_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { expenseRepository,tenantRepository },
  } = dependencies;

  if (!expenseRepository||!tenantRepository)
    throw new Error("The expenseRepository tenantRepository should be dependencie");

  const execute = async (comapanyName:string) => {
    console.log("all");
    
    const model = await tenantRepository.getCompanySchema(comapanyName,"Expenses")
    return expenseRepository.findexpense(model);
  };
  return {
    execute,
  };
};
