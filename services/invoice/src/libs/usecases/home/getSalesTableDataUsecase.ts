import { DepenteniciesData } from "../../entities/interfaces";

export const getSalesTableData_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { invoiceRepository, tenantRepository },
  } = dependencies;

  if (!invoiceRepository || !tenantRepository)
    throw new Error(
      "The invoiceRepository tenantRepository should be dependencie"
    );

  const execute = async (comapanyName: string) => {
    const model = await tenantRepository.getCompanySchema(
      comapanyName,
      "Invoices"
    );
    let todaysData = await invoiceRepository.findTodaysData(model);

    let thisWeekData = await invoiceRepository.findThisWeekData(model);

    let thisMonthData = await invoiceRepository.findThisMonthData(model);

    let thisQuarterData = await invoiceRepository.findThisQuarterData(model);

    let thisYearData = await invoiceRepository.findThisYearData(model);

    return {
      todaysData,
      thisMonthData,
      thisQuarterData,
      thisWeekData,
      thisYearData,
    };
  };
  return {
    execute,
  };
};
