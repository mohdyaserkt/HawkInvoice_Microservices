
import { DepenteniciesData } from "../../entities/interfaces";
import { Invoice, Iitems, itemsRegistrationData } from "../../entities";
import { cutomerRegistrationData } from "../../entities/customer";
import { invoiceRegistrationData } from "../../entities/Invoice";

export const createInvoice_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { invoiceRepository,tenantRepository },
  } = dependencies;

  if (!invoiceRepository||!tenantRepository)
    throw new Error("The itemsRepository tenantRepository should be dependencie");

  const execute = async (invoice: Invoice,comapanyName:string) => {
    

    const invoiceData = new invoiceRegistrationData(invoice);
    const model = await tenantRepository.getCompanySchema(comapanyName,"Invoices")
    return invoiceRepository.createInvoice(invoiceData,model);
  };
  return {
    execute,
  };
};
