
import { DepenteniciesData } from "../../entities/interfaces";
import { ExpenseRegistrationData, IExpense, Iitems, itemsRegistrationData } from "../../entities";
import { Invoice, invoiceRegistrationData } from "../../entities/Invoice";

export const editExpense_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { expenseRepository,tenantRepository },
  } = dependencies;

  if (!expenseRepository||!tenantRepository)
    throw new Error("The expenseRepository tenantRepository should be dependencie");

const execute = async (expense:IExpense,comapanyName:string) => {
    

    const expenseData = new ExpenseRegistrationData(expense);
    const model = await tenantRepository.getCompanySchema(comapanyName,"Expenses")
    return expenseRepository.updateExpense(expenseData,model);
  };
  return {
    execute,
  };
};
