
import { DepenteniciesData } from "../../entities/interfaces";
import { IExpense, ExpenseRegistrationData } from "../../entities";


export const createExpense_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { expenseRepository,tenantRepository },
  } = dependencies;

  if (!expenseRepository||!tenantRepository)
    throw new Error("The itemsRepository tenantRepository should be dependencie");

  const execute = async (expense: IExpense,comapanyName:string) => {
    

    const expenseData = new ExpenseRegistrationData(expense);
    const model = await tenantRepository.getCompanySchema(comapanyName,"Expenses")
    return expenseRepository.createExpense(expenseData,model);
  };
  return {
    execute,
  };
};
