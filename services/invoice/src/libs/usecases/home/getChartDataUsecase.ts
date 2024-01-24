
import { DepenteniciesData } from "../../entities/interfaces";

export const getChartData_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { invoiceRepository,tenantRepository,expenseRepository },
  } = dependencies;

  if (!invoiceRepository||!tenantRepository)
    throw new Error("The invoiceRepository tenantRepository should be dependencie");

  const execute = async (comapanyName:string) => {
    console.log("reached execute");
    
    const invoiceModel = await tenantRepository.getCompanySchema(comapanyName,"Invoices")


    let salesDataOfFinancialYear = await invoiceRepository.findDataOfThisFinancialYear(invoiceModel) 
    let  totalSales=await invoiceRepository.findTotalSales(invoiceModel)
    let  totalReceipts=await invoiceRepository.findTotalReciepts(invoiceModel)

    
    const ExpenseModel = await tenantRepository.getCompanySchema(comapanyName,"Expenses")
    
    let  totalExpenses=await expenseRepository.totalExpense(ExpenseModel)
    let  expenseDataOfFinancialYear=await expenseRepository.expensesOfThisFinancialYear(ExpenseModel)
    
  
    return {salesDataOfFinancialYear,expenseDataOfFinancialYear,totalExpenses,totalSales,totalReceipts}
  };
  return {
    execute,
  };
};
