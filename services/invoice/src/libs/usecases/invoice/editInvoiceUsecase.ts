
import { DepenteniciesData } from "../../entities/interfaces";
import { Iitems, itemsRegistrationData } from "../../entities";
import { Invoice, invoiceRegistrationData } from "../../entities/Invoice";

export const editInvoice_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { invoiceRepository,tenantRepository },
  } = dependencies;

  if (!invoiceRepository||!tenantRepository)
    throw new Error("The invoiceRepository tenantRepository should be dependencie");

const execute = async (invoice:Invoice,comapanyName:string) => {
    

    const invoiceData = new invoiceRegistrationData(invoice);
    const model = await tenantRepository.getCompanySchema(comapanyName,"Invoices")
    return invoiceRepository.updateInvoice(invoiceData,model);
  };
  return {
    execute,
  };
};
