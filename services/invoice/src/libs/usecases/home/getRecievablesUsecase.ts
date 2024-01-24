
import { DepenteniciesData } from "../../entities/interfaces";

export const getAllRecievables_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { invoiceRepository,tenantRepository },
  } = dependencies;

  if (!invoiceRepository||!tenantRepository)
    throw new Error("The invoiceRepository tenantRepository should be dependencie");

  const execute = async (comapanyName:string) => {
    
    const model = await tenantRepository.getCompanySchema(comapanyName,"Invoices")
    let  allrecievables=await invoiceRepository.findAllRecievables(model)
    let  overdueOneToFifteenDays= await invoiceRepository.findOverdueOneToFifteenDays(model)
    let  overdueSixteenToThirtyDays= await invoiceRepository.findOverdueSixteenToThirtyDays(model)
    let overdueThirtyOneToFortyFiveDays= await invoiceRepository.findOverdueThirtyOneToFortyFiveDays(model)
    let overdueAboveFourtyFiveDays= await invoiceRepository.findOverdueAboveFourtyFiveDays(model)
    return {allrecievables,overdueAboveFourtyFiveDays,overdueOneToFifteenDays,overdueSixteenToThirtyDays,overdueThirtyOneToFortyFiveDays}
  };
  return {
    execute,
  };
};
