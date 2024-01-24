
import { DepenteniciesData } from "../../entities/interfaces";

export const getAllInvoices_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { invoiceRepository,tenantRepository },
  } = dependencies;

  if (!invoiceRepository||!tenantRepository)
    throw new Error("The invoiceRepository tenantRepository should be dependencie");

  const execute = async (comapanyName:string) => {
    
    const model = await tenantRepository.getCompanySchema(comapanyName,"Invoices")
    return invoiceRepository.findInvoices(model);
  };
  return {
    execute,
  };
};
